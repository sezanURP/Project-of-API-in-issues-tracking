// main page logic starts

const manageSpinner=(status)=>{
  if(status==true){
    document.getElementById("spinner").classList.remove("hidden")
    document.getElementById("issues_Container").classList.add("hidden")
  }else{
    document.getElementById("issues_Container").classList.remove("hidden")
    document.getElementById("spinner").classList.add("hidden")

  }
}

const loadIssues = () => {
  manageSpinner(true)

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((response) => response.json())
    .then((data) => {
      displayIssues(data.data);
    });
    //  manageSpinner(true)
   
};

// loadIssues();

const displayIssues = (issues) => {
  const issuesContainer = document.getElementById("issues_Container");
  issuesContainer.innerHTML = ""; // Clear previous content

  issues.forEach((issue) => {
    const issueElement = document.createElement("div");
    // console.log(issue);

    issueElement.innerHTML = `<div onclick="showModal(${issue.id})"
          class="issue-card border-t-4 ${issue.status === "open" ? "border-green-500" : "border-purple-500"} p-4 rounded-lg shadow-lg"
        >
          <div class="flex justify-between items-center">
             <span><i class="fa-regular ${issue.status === 'open' ? "text-green-500" : "text-purple-500"} fa-circle-dot"></i></span>
            <span class=" ${issue.priority === "high" ? "bg-red-200" : issue.priority === "medium" ? "bg-yellow-200" : "bg-gray-400"} px-3 rounded-full font-medium ">${issue.priority}</span>
          </div>
          <div>
            <h3 class="text-xl font-bold mt-4">${issue.title}</h3>
            <p class="text-gray-600 text-sm mt-2">
              ${issue.description}
            </p>

            <div class="flex gap-3 mt-4">
              ${createElements(issue.labels)}
            </div>

            <div class="bg-gray-50 px-5 py-3 text-gray-500 text-sm border-t mt-5">
              <p>#${issue.id} by ${issue.author}</p>
              <p>${issue.createdAt}</p>
            </div>


          </div>
        </div>`;

    issuesContainer.append(issueElement);
  });
  manageSpinner(false)
};

loadIssues();

const showModal = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  // console.log(url)

  const res = await fetch(url);
  const details = await res.json();
  displayModal(details.data);
};

const displayModal = (mIssue) => {
  // console.log(mIssue)

  //   "id": 1,
  // "title": "Fix navigation menu on mobile devices",
  // "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
  // "status": "open",
  // "labels": [
  // "bug",
  // "help wanted"
  // ],
  // "priority": "high",
  // "author": "john_doe",
  // "assignee": "jane_smith",
  // "createdAt": "2024-01-15T10:30:00Z",
  // "updatedAt": "2024-01-15T10:30:00Z"


  // modal issue show

  const modalBox = document.getElementById("modal-container");
  modalBox.innerHTML = `
    <div class="">
              <h3 class="text-lg font-bold mb">${mIssue.title}</h3>
              <p>
              <ul class="flex gap-4 ">
                <li class="rounded-lg text-white px-2 bg-green-500">${mIssue.status}</li>
                <li class=""><i class="fa-solid text-gray-500 fa-circle" style="font-size: 4px;"></i> Opened by ${mIssue.assignee ? mIssue.assignee : mIssue.author} 
                </li>
                <li><i class="fa-solid text-gray-500 fa-circle" style="font-size: 4px;"></i> ${mIssue.updateAt ? mIssue.updateAt : mIssue.createdAt}</li>
              </ul>
              </p>
            </div>
            <div class="my-10 "> <div>${createElements(mIssue.labels)}</div></div>
            <p class="py-3 text-gray-500 text-xl">${mIssue.description}</p>
            <div class="flex ">
              <p class="ml-3"><span class="text-gray-500">Assignee:</span> <br><span
                  class="mt-2 text-xl font-medium">${mIssue.assignee ? mIssue.assignee : mIssue.author}</span> </p>

              <p class="ml-30 "><span class="text-gray-500">Priority:</span><br> <span
                  class="rounded-lg bg-red-500 text-white px-4 font-medium mt-2"> ${mIssue.priority}</span></p>
            </div>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
              </form>
            </div>
    `;
  document.getElementById("my_modal_5").showModal();
};

// show issue labels in modal
const createElements = (arr) => {
  const htmlElements = arr.map(
    (el) => {
      if (el === 'bug') {
        html = `<span class=" text-sm  rounded-md text-red-800 bg-red-200"><i
                  class="fa-solid font-bold fa-bug text-red-900"></i> ${el}</span>`
      }
      else if (el === 'enhancement') {
        html = `<span class="text-sm rounded-md  text-green-800 bg-green-200"><i
                  class="fa-solid font-bold fa-hexagon-nodes text-green-900"></i> ${el}</span>`
      }
      else if (el = 'help wanted') {
        html = `<span class="text-sm rounded-md text-yellow-800 bg-yellow-200"><i
                  class="fa-solid font-bold fa-life-ring text-yellow-900"></i> ${el}</span>`
      }
      else if (el = 'documentation') {
        html = `<span class="text-sm rounded-md text-purple-800 bg-purple-500"><i
                  class="fa-solid font-bold fa-hexagon-nodes text-purple-900"></i>${el}</span>`
      }
      return html
    },
  );

  return htmlElements.join(" ");
};
// issue count logic

const issueCount = document.getElementById("issue_count");

const allTab = [];

const allIssues = () => {
  url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allTab.push(...data.data);
       issueCount.innerHTML = `<span class="text-2xl font-bold">${data.data.length} Issues</span>`;
    });
};

allIssues();

const openTab = [];

const openIssues = () => {
  url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const oIssues = data.data;
      const openIssue = oIssues.filter((issue) => issue.status === "open");

      openTab.push(...openIssue);
    });
};

openIssues();

const closedTab = [];

const closedIssues = () => {
  url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cIssues = data.data;
      const closedIssue = cIssues.filter((issue) => issue.status === "closed");

      closedTab.push(...closedIssue);
    });
};

closedIssues();
// console.log(closedTab.length);

// tab btn logic
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closedBtn = document.getElementById("closed-btn");

function toggleStyle(id) {
  const buttons = [allBtn, openBtn, closedBtn];

  buttons.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("bg-blue-500", "text-white");
    } else {
      btn.classList.remove("bg-blue-500", "text-white");
    }
  });

  if (id === "all-btn") {
    tabBtn("all");
  } else if (id === "open-btn") {
    tabBtn("open");
  } else if (id === "closed-btn") {
    tabBtn("closed");
  }

}



//  tab logic
const tabBtn = (activeTab) => {
  if (activeTab === "all") {
    issueCount.innerHTML = `<span class="text-2xl font-bold">${allTab.length} Issues</span>`;
    displayIssues(allTab);
  } else if (activeTab === "open") {
    issueCount.innerHTML = `<span class="text-2xl font-bold">${openTab.length} Issues</span>`;
    displayIssues(openTab);
  } else if (activeTab === "closed") {
    issueCount.innerHTML = `<span class="text-2xl font-bold">${closedTab.length} Issues</span>`;
    displayIssues(closedTab);
  }
};


document.getElementById("btn-search").addEventListener("click", () => {
  const input = document.getElementById("input-search").value
  const inputLoCase = input.trim().toLowerCase()
  // const inputLowerCase= "notifications"
  // console.log(inputLoCase)

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${inputLoCase}`)



    .then(res => res.json())
    .then(searchWord => {
     
      // const allIssueLcase=data.toLowerCase().
      displayIssues(searchWord.data)
       issueCount.innerHTML = `<span class="text-2xl font-bold">${searchWord.data.length} Issues</span>`;
    })
     

})

// const searchBtn = document.getElementById("btn-search");

    //   searchBtn.addEventListener("click", () => {
    //     issueCount=""
    //     issueCount.innerHTML =
    //       `<span class="text-2xl font-bold">
    //   ${displayIssues(searchWord.data.length)} Issues
    // </span>`;
    // displayIssues(searchWord.data)

    //   });


// searchBtn.addEventListener("click", () => {
//   issueCount.innerHTML =
//     `<span class="text-2xl font-bold">
//       ${displayIssues(searchWord.data.length)} Issues
//     </span>`;
// });

// const searchBtn=document.getElementById("btn-search").addEventListener("click", ()=>{ issueCount.innerHTML=`<span class="text-2xl font-bold">${ displayIssues(searchWord.data.length)} Issues in search item</span>` })

// const displaySearch=()




