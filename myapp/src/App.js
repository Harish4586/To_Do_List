import { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
  const contractAddress = "0x77942AF589fC170313B149474E40748fFc0d7505";


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


  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);

  // Task input states
  const [taskId, setTaskId] = useState("");
  const [taskInfo, setTaskInfo] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [completeId, setCompleteId] = useState("");

  useEffect(() => {
    async function init() {
      if (typeof window.ethereum !== "undefined") {
        const prov = new ethers.BrowserProvider(window.ethereum);
        await prov.send("eth_requestAccounts", []);
        const signer = await prov.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        setProvider(prov);
        setSigner(signer);
        setContract(contract);

        await loadTasks(contract);
      } else {
        alert("MetaMask not detected");
      }
    }

    init();
  }, []);

  const loadTasks = async (contract) => {
    const totalTasks = await contract.totalTasks();
    setTotal(totalTasks);

    const myTasks = await contract.getMyTasks();
    setTasks(myTasks);
  };

  // Add new task
  const handleAddTask = async () => {
    if (!taskId || !taskInfo) return alert("Provide ID and Task Info");
    try {
      const tx = await contract.initializeTasks(
        Number(taskId),
        taskInfo,
        taskCompleted
      );
      await tx.wait();
      alert("Task added!");
      setTaskId("");
      setTaskInfo("");
      setTaskCompleted(false);
      await loadTasks(contract);
    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    }
  };

  // Complete a task
  const handleCompleteTask = async () => {
    if (!completeId) return alert("Provide task ID to complete");
    try {
      const tx = await contract.completeTask(Number(completeId));
      await tx.wait();
      alert("Task completed!");
      setCompleteId("");
      await loadTasks(contract);
    } catch (err) {
      console.error(err);
      alert("Failed to complete task");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My Todo dApp</h1>
      <h2>Total Tasks: {total}</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Add Task</h3>
        <input
          type="number"
          placeholder="Task ID"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Info"
          value={taskInfo}
          onChange={(e) => setTaskInfo(e.target.value)}
        />
        <label style={{ marginLeft: "10px" }}>
          Completed?
          <input
            type="checkbox"
            checked={taskCompleted}
            onChange={(e) => setTaskCompleted(e.target.checked)}
            style={{ marginLeft: "5px" }}
          />
        </label>
        <button onClick={handleAddTask} style={{ marginLeft: "10px" }}>
          Add Task
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Complete Task</h3>
        <input
          type="number"
          placeholder="Task ID"
          value={completeId}
          onChange={(e) => setCompleteId(e.target.value)}
        />
        <button onClick={handleCompleteTask} style={{ marginLeft: "10px" }}>
          Complete Task
        </button>
      </div>

      <div>
        <h3>My Tasks</h3>
        <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Info</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((t, index) => (
                <tr key={index}>
                  <td>{t.id.toString()}</td>
                  <td>{t.taskInfo}</td>
                  <td>{t.iscompleted ? "✅" : "❌"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No tasks found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;