# IRO 前端交互文档

## 合约地址 (BSC Mainnet)

| 合约 | 地址 |
|------|------|
| InvestmentManager | `0x6Ec63400f33D8A5331dbaF2336ADcC1f455908a8` |
| USDC | `0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d` |
| WeUSD | `0xdd73EA766B80417C0607A3f08E34A0C415D89D56` |
| InvestmentPool | `0xF9Af57B0c505339cE06A6C9E9380fA9741f9aD32` |

## 用户投资流程

### 直接使用 InvestmentManager

用户需先持有 WeUSD，手动调用投资。

```solidity
function invest(
    uint256 assetId, // 资产ID
    uint256 amount   // WeUSD 金额 (6 decimals)
) external returns (uint256 investmentId)
```

**前端步骤：**
1. 用户 approve WeUSD 给 InvestmentPool
2. 调用 `invest`
s
```typescript
const investmentManager = new ethers.Contract(managerAddress, MANAGER_ABI, signer);
const investmentPoolAddress = await investmentManager.getInvestmentPoolAddress();

// 1. Approve WeUSD
const weusd = new ethers.Contract(weusdAddress, ERC20_ABI, signer);
const amount = ethers.parseUnits("100", 6); // 100 WeUSD
await weusd.approve(investmentPoolAddress, amount);

// 2. 投资
const tx = await investmentManager.invest(assetId, amount);
```

---

## 查询函数

### 1. 获取资产列表

```typescript
// AssetRegistry 合约
const assetRegistry = new ethers.Contract(registryAddress, REGISTRY_ABI, provider);

// 获取活跃资产数量
const count = await assetRegistry.getActiveAssetsCount();

// 获取活跃资产列表（分页）
const assets = await assetRegistry.getActiveAssets(0, 10);
```

**Asset 结构：**
```typescript
interface Asset {
    assetId: bigint;
    name: string;
    issuer: string;
    description: string;
    apy: bigint;           // 基于 10000，如 1000 = 10%
    maxAmount: bigint;     // 最大募集金额
    currentAmount: bigint; // 当前已投资金额
    status: number;        // 0=Inactive, 1=Active, 2=Completed, 3=Deprecated
    minInvestment: bigint; // 最小投资额
    maxInvestment: bigint; // 单用户最大投资额
    period: bigint;        // 投资周期（秒）
    addedTime: bigint;
}
```

### 2. 获取用户投资记录

```typescript
// 获取投资摘要
const summary = await investmentManager.getUserInvestmentSummary(userAddress);

// 获取投资列表（分页）
const result = await investmentManager.getUserInvestmentsPaginated(userAddress, 0, 10);
// result.investments - 投资数组
// result.totalCount - 总数
// result.hasNextPage - 是否有下一页
```

**Investment 结构：**
```typescript
interface Investment {
    investmentId: bigint;
    investor: string;
    assetId: bigint;
    amount: bigint;        // 投资金额 (6 decimals)
    startTime: bigint;     // 开始时间（timestamp）
    endTime: bigint;       // 结束时间（timestamp）
    period: bigint;        // 周期（秒）
    apy: bigint;           // 年化收益率
    status: number;        // 0=Invalid, 1=Active, 2=Completed, 3=Cancelled
    profit: bigint;        // 收益
    claimedProfit: bigint; // 已领取收益
}
```

### 3. 计算收益

```typescript
const profit = await investmentManager.calculateProfit(investmentId);
```

### 4. 赎回投资

```solidity
function redeem(uint256 investmentId) external returns (uint256 profit)
```

```typescript
// 投资到期后可赎回
const tx = await investmentManager.redeem(investmentId);
```

---

## ABI 片段

### InvestHelperSecure

```json
[
    "function quickInvest(uint256 assetId, address token, uint256 amount, bytes calldata data) external returns (uint256)",
    "function quickInvestETH(uint256 assetId, bytes calldata data) external payable returns (uint256)"
]
```

### InvestmentManager

```json
[
    "function invest(uint256 assetId, uint256 amount) external returns (uint256)",
    "function redeem(uint256 investmentId) external returns (uint256)",
    "function calculateProfit(uint256 investmentId) external view returns (uint256)",
    "function getInvestment(uint256 investmentId) external view returns (tuple(uint256 investmentId, address investor, uint256 assetId, uint256 amount, uint256 startTime, uint256 endTime, uint256 period, uint256 apy, uint8 status, uint256 profit, uint256 claimedProfit))",
    "function getUserInvestmentSummary(address account) external view returns (tuple(uint256 totalInvestment, uint256 totalActiveInvestment, uint256 totalProfit, uint256 totalClaimedProfit, uint256 activeInvestmentCount, uint256 totalInvestmentCount))",
    "function getUserInvestmentsPaginated(address account, uint256 offset, uint256 limit) external view returns (tuple(tuple(uint256 investmentId, address investor, uint256 assetId, uint256 amount, uint256 startTime, uint256 endTime, uint256 period, uint256 apy, uint8 status, uint256 profit, uint256 claimedProfit)[] investments, uint256 totalCount, bool hasNextPage))",
    "function getInvestmentPoolAddress() external view returns (address)",
    "function isBlacklisted(address account) external view returns (bool)"
]
```

### AssetRegistry

```json
[
    "function getAsset(uint256 assetId) external view returns (tuple(uint256 assetId, string name, string issuer, string description, uint256 apy, uint256 maxAmount, uint256 currentAmount, uint8 status, uint256 minInvestment, uint256 maxInvestment, uint256 period, uint256 addedTime))",
    "function getActiveAssets(uint256 startIndex, uint256 count) external view returns (tuple(uint256 assetId, string name, string issuer, string description, uint256 apy, uint256 maxAmount, uint256 currentAmount, uint8 status, uint256 minInvestment, uint256 maxInvestment, uint256 period, uint256 addedTime)[])",
    "function getActiveAssetsCount() external view returns (uint256)",
    "function validateInvestment(uint256 assetId, uint256 amount) external view returns (bool)"
]
```

---

## 事件监听

### InvestmentCreated

```typescript
investmentManager.on("InvestmentCreated", (
    investmentId,
    investor,
    assetId,
    amount,
    startTime,
    endTime,
    period,
    apy,
    timestamp
) => {
    console.log(`新投资: ${investmentId}, 用户: ${investor}, 金额: ${amount}`);
});
```

### ProfitClaimed

```typescript
investmentManager.on("ProfitClaimed", (
    investmentId,
    investor,
    profitAmount,
    totalAmount,
    timestamp
) => {
    console.log(`赎回成功: ${investmentId}, 收益: ${profitAmount}`);
});
```

---

## 注意事项

1. **精度处理**
   - WeUSD: 6 decimals
   - USDC: 18 decimals
   - APY: 基于 10000（如 1000 = 10%）

2. **投资验证**
   - 金额需在 `minInvestment` 和 `maxInvestment` 之间
   - 资产状态必须为 `Active (1)`
   - 剩余额度：`maxAmount - currentAmount`

3. **赎回条件**
   - 当前时间 >= `endTime`
   - 投资状态为 `Active (1)`
   - 用户是投资所有者

4. **黑名单检查**
   - 投资前检查：`isBlacklisted(userAddress)`

# 前端交互接口文档
bnb主链
- **GLA**：‘’
- **Market**: ``
- **RWA**: ``
- **WEUSD**: `0xdd73ea766b80417c0607a3f08e34a0c415d89d56`

本文档列出了前端需要与2个核心合约交互的主要接口。

## 1. GLA (GenesisLaunchAuction) - 初始发行拍卖

### 1.1 购买接口

#### `whitelistBuy(uint256 amount)`
- **功能**: 白名单用户购买RWA
- **参数**: 
  - `amount`: WEUSD数量
- **前置条件**: 必须在白名单阶段且用户在白名单中
- **说明**: 调用前需要先授权WEUSD给合约

#### `publicOfferingBuy(uint256 amount)`
- **功能**: 公募阶段购买RWA
- **参数**: 
  - `amount`: WEUSD数量
- **前置条件**: 必须在公募阶段
- **说明**: 调用前需要先授权WEUSD给合约

### 1.2 领取/提取接口

#### `claim()`
- **功能**: 领取购买的RWA代币
- **前置条件**: 市场已初始化（initialized = true）
- **说明**: 领取后会自动清除用户的shares记录

#### `withdraw()`
- **功能**: 提取WEUSD（仅在解锁阶段可用）
- **前置条件**: 市场未达到softCap，进入解锁阶段
- **说明**: 提取后会自动清除用户的shares记录

---

## 2. Market - 交易市场

### 2.1 购买接口

#### `buy(address token, uint256 tokenWorth, uint256 desired) returns (uint256 amount, uint256 fee)`
- **功能**: 使用稳定币购买RWA
- **参数**: 
  - `token`: 稳定币地址
  - `tokenWorth`: 稳定币数量
  - `desired`: 期望获得的最小RWA数量（滑点保护）
- **返回值**: 
  - `amount`: 实际获得的RWA数量
  - `fee`: 开发者手续费（RWA）
- **前置条件**: 
  - 市场已启动
  - 合约未暂停
  - token必须在可购买列表中
- **说明**: 调用前需要先授权稳定币给合约

### 2.2 卖出接口

#### `sell(address token, uint256 amount, uint256 desired) returns (uint256 worth, uint256 fee)`
- **功能**: 卖出RWA换取稳定币
- **参数**: 
  - `token`: 稳定币地址
  - `amount`: 要卖出的RWA数量
  - `desired`: 期望获得的最小稳定币数量（滑点保护）
- **返回值**: 
  - `worth`: 实际获得的稳定币数量
  - `fee`: 开发者手续费（RWA）
- **前置条件**: 
  - 市场已启动
  - 合约未暂停
  - token必须在可卖出列表中
- **说明**: 调用前需要先授权RWA给合约


## 注意事项

1. **代币授权**: 所有涉及代币转移的操作都需要先调用ERC20的`approve`方法授权给合约
2. **滑点保护**: Market的买卖操作都包含`desired`参数用于滑点保护
3. **精度**: 
   - weusd是6位
   - usdc是18位
   - RWA和prRWA都是18位精度
   - 所有价格相关数值使用1e18精度
4. **手续费**: 所有手续费都以基点（basis points）表示，10000 = 100%

