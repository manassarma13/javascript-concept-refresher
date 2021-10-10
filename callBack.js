console.log('Start-Node');

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('===========================================')
        callback({ userName: email })
    }, 3000);
}

function getUserDetails(email, callback) {
    setTimeout(() => {
        callback(['detail1', 'detail2', 'detail3']);
    }, 1000)
}

const user = loginUser('manassarma121@xyzmail.com', 123654, (user) => {
    console.log(user);
    getUserDetails(user.userName, (details) => {
        console.log(details);
    });
});

console.log('End-Node');