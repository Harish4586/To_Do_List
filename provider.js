require('dotenv').config()
const {ethers} = require('ethers');
const private_key= process.env.PRIVATE_KEY;

//contract address: 0x77942AF589fC170313B149474E40748fFc0d7505
const contractAddress=process.env.CONTRACT_ADDRESS;
const infura_key=process.env.INFURA_KEY;
const walletAddress=process.env.WALLET_ADDRESS;
const abi= [
  {
    "name": "completeTask",
    "type": "function",
    "inputs": [
      {
        "name": "_id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "name": "getMyTasks",
    "type": "function",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "components": [
          {
            "name": "id",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "taskInfo",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "iscompleted",
            "type": "bool",
            "internalType": "bool"
          }
        ],
        "internalType": "struct todoList.Task[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "name": "initializeTasks",
    "type": "function",
    "inputs": [
      {
        "name": "_id",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_taskInfo",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_iscompleated",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "name": "totalTasks",
    "type": "function",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "name": "users",
    "type": "function",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "taskInfo",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "iscompleted",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  }
];


async function main(){
    const provider = new ethers.JsonRpcProvider(infura_key);
  const signer = new ethers.Wallet(private_key, provider); // signer with wallet
const contract = new ethers.Contract(contractAddress, abi, signer);
// const contract= new ethers.Contract(contractAddress,abi,provider);  
// //THIS DOESNT ALLOW MSG.SENDER IN CONTRACT*******
//SO WE HAVE 2 OPTIONS , 1. TO CHANGE CONTRACT AND REDEPLOY, 2. TO JUST COLLECT WALLET ADDRESS AND MAKE A CONTRACT OBJECT THAT CALLS
//THE CONTRACT FUNCTIONS WITH THE WALLET ADDRESS.

    
  
/*Your app sends an RPC request

Infura receives it and:

Authenticates you using your project ID

Applies rate limits / quotas

Infura forwards the request to one of their Ethereum nodes

That node:

Executes the EVM

Reads blockchain state

Result flows back to you */



const blockNumber= await provider.getBlockNumber();
console.log("Current block number: ", blockNumber);

/**It creates a JavaScript object that:

Knows where the contract lives (address)

Knows how to talk to it (ABI)

Knows where to send requests (provider)

After this, you can call:

contract.totalTasks()
contract.getMyTasks()
contract.completeTask(1)


as if they were normal JS functions. */

const balance= await provider.getBalance(walletAddress);
const eth= ethers.formatEther(balance);
console.log("Account balance: ", eth);

const totalTasks= await contract.totalTasks();
console.log("Total tasks: ", totalTasks);
const getMyTask= await contract.getMyTasks();
console.log("my tasks are: ",getMyTask)
}
main();