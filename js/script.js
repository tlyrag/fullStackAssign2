const pagination = document.getElementsByClassName('pagination');
const contactListHtml = document.getElementsByClassName('contact-list')
const pageHeader = document.getElementsByClassName('page-header cf')
        
let contactList = ""

/// --------------------- Working with Users--------------------
let currUsers = [];
/**
 * 
 * @param {*} n  Page Number
 * Fetches the users from n to n*10 based on page
 * if n = 1 Grab first 10 users
 */


const fetchUser = (n) => {
    currUsers = [];
    console.log(`Fetching user from ${10*(n-1)} to ${n*10}`)
    for(i =10*(n-1) ; i<n*10 ;i++) {
        if(i<users.length) {
            currUsers.push(users[i]);
        }
    }
    console.log(currUsers);
    
}
/**
 * Creates the html list of the user based 
 * on the CurrUser List
 */

const createUser = (n) => {

    let userImage = currUsers[n].image;
    let userName = currUsers[n].name; 
    let userEmail =currUsers[n].name.replace(" ","."); 
    let joinDate = currUsers[n].joined;
  
    return `<li class="contact-item cf">
            <div class="contact-details">
                <img class="avatar" src=${userImage}>
                <h3>${userName}</h3>
                <span class="email">${userEmail}@example.com</span>
            </div>
            <div class="joined-details">
                   <span class="date">${joinDate}</span>
           </div>
        </li>`
}
/**
 * Update the total amount of users in the page header
 */
const updatePageHeader = () => {
    pageHeader[0].innerHTML =
    `<h2>Contacts</h2> 
    <h3>Total: ${currUsers.length}</h3>`
}
/**
 * Increment the contactList hml string and 
 * update the innerHtml of the page with the user list
 */
const addContacts = (n) => {
    
    fetchUser(n);
    contactList = ""
    for(user in currUsers) {
       
        contactList +=createUser(user);
      
    }
    updatePageHeader();
    contactListHtml[0].innerHTML = contactList
};


addContacts(1);

/// --------------------- Working with Pagination--------------------
let paginationHtml =`<ul>`;

/**
 * Increment the page number hml string and 
 * update the innerHtml of the page with the pagination list
 */

const createPagination = () => {
    let pageNumber = Math.ceil( users.length/10);
    let page = 1
    while(page<=pageNumber) {
        paginationHtml +=
        `
            <li>
                <a id="${page}" onClick="addContacts(${page})">${page}</a>
            </li>
        `  
        page+=1;
    }
    paginationHtml += '</ul>'
  
    pagination[0].innerHTML =paginationHtml;

}
createPagination()

