# Etherjs - Decentralized Task Management DApp

A modern decentralized application (DApp) built on Ethereum that enables users to manage tasks directly on the blockchain using smart contracts. This project combines a React-based frontend with ethers.js for seamless blockchain interactions.

## 🌟 Features

- **Blockchain-Based Task Management**: Create and manage tasks directly on Ethereum smart contracts
- **Real-time Task Tracking**: View all your tasks with completion status
- **Mark Tasks Complete**: Update task completion status on the blockchain
- **Web3 Integration**: Seamless MetaMask and wallet integration
- **Responsive UI**: Modern React-based user interface
- **Backend Services**: Node.js backend for blockchain interactions and provider management

## 🛠 Tech Stack

- **Frontend**: React 19.x, React DOM
- **Blockchain**: ethers.js 6.16.x (Ethereum JavaScript library)
- **Backend**: Node.js with ethers.js
- **Environment Management**: dotenv for secure configuration
- **Testing**: Jest and React Testing Library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn** package manager
- **MetaMask** browser extension (for Web3 interactions)
- **Git** for version control

### Required Accounts & Services

- **Infura** account for Ethereum network access (get your API key from [Infura](https://infura.io/))
- **Ethereum wallet** with testnet funds for testing (e.g., Sepolia testnet ETH)
- Deployed smart contract on your target Ethereum network

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/etherjs.git
cd etherjs
```

### 2. Install Root Dependencies

```bash
npm install
```

This installs ethers.js and dotenv at the project root.

### 3. Install Frontend Dependencies

```bash
cd myapp
npm install
cd ..
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Ethereum Network Configuration
PRIVATE_KEY=your_private_key_here
INFURA_KEY=your_infura_api_key
WALLET_ADDRESS=0xyourwalletaddresshere
CONTRACT_ADDRESS=0x77942AF589fC170313B149474E40748fFc0d7505
```

**Security Note**: Never commit the `.env` file. It's already included in `.gitignore`.

#### Environment Variables Explanation

- `PRIVATE_KEY`: Your Ethereum account's private key (handle with care!)
- `INFURA_KEY`: API key for Infura to connect to Ethereum network
- `WALLET_ADDRESS`: Your Ethereum wallet address
- `CONTRACT_ADDRESS`: The deployed smart contract address that manages tasks

## 🚀 Usage

### Development Mode

#### Start the Frontend

Navigate to the myapp directory and start the React development server:

```bash
cd myapp
npm start
```

The application will open at `http://localhost:3000`

#### Run Backend Provider

In a separate terminal, run the ethers.js provider script:

```bash
node provider.js
```

### Production Build

Build the React application for production:

```bash
cd myapp
npm run build
```

The optimized build will be created in the `build/` directory.

## 📁 Project Structure

```
etherjs/
├── package.json              # Root dependencies (ethers.js, dotenv)
├── provider.js              # Node.js script for blockchain interactions
├── .env                     # Environment variables (not in repo)
├── .gitignore              # Git ignore configuration
├── README.md               # This file
└── myapp/                  # React frontend application
    ├── package.json        # Frontend dependencies
    ├── public/             # Static assets
    │   ├── index.html      # Main HTML file
    │   ├── manifest.json   # PWA manifest
    │   └── robots.txt      # SEO robots configuration
    └── src/                # React source code
        ├── App.js          # Main React component with contract interactions
        ├── App.css         # Styling for App component
        ├── App.test.js     # Tests for App component
        ├── dapp.js         # DApp utility functions
        ├── index.js        # React entry point
        ├── index.css       # Global styles
        ├── reportWebVitals.js  # Performance monitoring
        └── setupTests.js   # Test configuration
```

## 🔌 Smart Contract Integration

### Contract Address
`0x77942AF589fC170313B149474E40748fFc0d7505`

### Available Functions

- **getMyTasks()**: Retrieves all tasks associated with the wallet address
  - Returns: Array of Task objects with id, taskInfo, and iscompleted status

- **completeTask(uint256 _id)**: Marks a task as completed
  - Parameter: Task ID
  - Returns: Transaction confirmation string

## 📝 Available Scripts

### In the `myapp` directory:

- `npm start` - Run the development server
- `npm build` - Create a production build
- `npm test` - Run tests in watch mode
- `npm eject` - Eject from Create React App (irreversible)

### In the root directory:

- `node provider.js` - Run the backend blockchain provider script

## 🧪 Testing

Run the test suite:

```bash
cd myapp
npm test
```

## 🔐 Security Best Practices

1. **Never share your private key** - Keep PRIVATE_KEY secure and never commit it
2. **Use environment variables** - Store sensitive data in `.env`
3. **Validate contract interactions** - Always verify contract addresses
4. **Test on testnet first** - Use Ethereum testnet (Sepolia, Goerli) before mainnet
5. **Audit smart contracts** - Ensure your smart contracts are audited for security

## 🌐 Supported Networks

This DApp can interact with:
- Ethereum Mainnet
- Ethereum Sepolia Testnet
- Ethereum Goerli Testnet
- Other EVM-compatible networks (Polygon, Arbitrum, etc.)

Modify the network configuration in `provider.js` and `App.js` as needed.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation
- Review the smart contract ABI for contract-related questions

## 🔗 Useful Resources

- [ethers.js Documentation](https://docs.ethers.org/)
- [Ethereum Development Documentation](https://ethereum.org/en/developers/)
- [MetaMask Documentation](https://docs.metamask.io/)
- [React Documentation](https://react.dev/)
- [Infura Documentation](https://docs.infura.io/)

## 🎯 Future Improvements

- [ ] Add task creation functionality
- [ ] Implement task deletion
- [ ] Add task priority levels
- [ ] Create task due dates
- [ ] Add task filtering and sorting
- [ ] Implement Gas optimization
- [ ] Add transaction history
- [ ] Deploy to multiple networks

---

**Made with ❤️ using Ethers.js and React**
