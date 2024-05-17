// const abi = [
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "_teacherName",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_department",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_designation",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_domainOfInterest",
//                 "type": "string"
//             }
//         ],
//         "name": "registerTeacher",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "_user",
//                 "type": "address"
//             }
//         ],
//         "name": "getTeacherDetails",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     }
// ];

// const contractAddress = '0x9955ed28D73C886491BC71c8fA628496D083B013';

// async function registerTeacher() {
//     if (window.ethereum) {
//         window.web3 = new Web3(window.ethereum);
//         await window.ethereum.enable();
//     } else {
//         console.log('No Ethereum provider detected. Install MetaMask.');
//         return;
//     }

//     const contract = new web3.eth.Contract(abi, contractAddress);
//     const accounts = await web3.eth.getAccounts();
//     const account = accounts[0];

//     const teacherName = document.getElementById('teacherName').value;
//     const department = document.getElementById('department').value;
//     const designation = document.getElementById('designation').value;
//     const domainOfInterest = document.getElementById('domainOfInterest').value;

//     try {
//         await contract.methods.registerTeacher(teacherName, department, designation, domainOfInterest).send({ from: account });
//         alert('Teacher registered successfully');
//         window.location.href = 'success.html';
//     } catch (error) {
//         console.error(error);
//         alert('Error registering teacher. See console for details.');
//     }
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     if (window.location.pathname.includes('success.html')) {
//         if (window.ethereum) {
//             window.web3 = new Web3(window.ethereum);
//             await window.ethereum.enable();

//             const contract = new web3.eth.Contract(abi, contractAddress);
//             const accounts = await web3.eth.getAccounts();
//             const account = accounts[0];

//             try {
//                 const details = await contract.methods.getTeacherDetails(account).call();
//                 const detailsContainer = document.getElementById('details');
//                 detailsContainer.innerHTML = `
//                     <div class="details-box">
//                         <h2>Teacher Registration Receipt</h2>
//                         <p><strong>Name:</strong> ${details[0]}</p>
//                         <p><strong>Department:</strong> ${details[1]}</p>
//                         <p><strong>Designation:</strong> ${details[2]}</p>
//                         <p><strong>Domain of Interest:</strong> ${details[3]}</p>
//                         <p class="timestamp">Date & Time: ${new Date().toLocaleString()}</p>
//                         <p class="signature">Teacher Signature: ${details[0]}</p>
//                     </div>
//                 `;
//             } catch (error) {
//                 console.error(error);
//                 alert('Error fetching teacher details. See console for details.');
//             }
//         } else {
//             console.log('No Ethereum provider detected. Install MetaMask.');
//         }
//     }
// });

// Ensure you have web3.js included in your project

// ABI and contract address for TeacherRegistration contract
const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_teacherName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_department",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_designation",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_domainOfInterest",
                "type": "string"
            }
        ],
        "name": "registerTeacher",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getTeacherDetails",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = '0x9955ed28D73C886491BC71c8fA628496D083B013';

async function registerTeacher() {
    // Connect to the blockchain
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        console.log('No Ethereum provider detected. Install MetaMask.');
        return;
    }

    const contract = new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    // Get form values
    const teacherName = document.getElementById('teacherName').value;
    const department = document.getElementById('department').value;
    const designation = document.getElementById('designation').value;
    const domainOfInterest = document.getElementById('domainOfInterest').value;

    try {
        await contract.methods.registerTeacher(teacherName, department, designation, domainOfInterest).send({ from: account });
        // Navigate to the next page or show a success message
        alert('Teacher registered successfully');
        window.location.href = 'success.html'; // Uncomment if you have a next page to navigate to
    } catch (error) {
        console.error(error);
        alert('Error registering teacher. See console for details.');
    }
}
