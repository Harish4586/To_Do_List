import {ethers} from "ethers"
const walletAddress="0x77942AF589fC170313B149474E40748fFc0d7505";
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
export async function connectWallet(){
    if(!window.ehtereum){
        alert("please install metamask!");
    }
    else{
        await window.ehtereum.request({method:"eth_requestAccounts"});
        const provider= new ethers.BrowserProvider(window.ethereum);
        const signer= await provider.getSigner();
        const contract= new ethers.Contract(walletAddress,abi,signer);

        console.log("Connected wallet:", await signer.getAddress());


      return contract;



    }
}
connectWallet();
