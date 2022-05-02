import {
    LightningElement, track
} from 'lwc';

export default class GithubDetails extends LightningElement {
    @track data;

    handlechange() {
        document.getElementById("dynamictable").innerHTML = ""
        var a = document.getElementById("pro").value;
        fetch(`https://api.github.com/users/${a}`)
            .then(function (result) {
                return result.json();
            })
            .then(function (response) {
                console.log(response);
                data = response.avatar_url;
                username = response.name;
                followers = response.followers_url;
                console.log(followers);
                //console.log(data);  Image Url
                document.getElementById("image").src = data;
                document.getElementById("username").innerHTML = username;

                document.getElementById("image").style.animationName = "imggg";
                // setdata(data);
                // Follower's Fetch
                fetch(followers).then(function (followerobj) {
                    return followerobj.json()
                }).then(function (allfollowers) {
                    console.log(allfollowers);
                    // eslint-disable-next-line guard-for-in
                    for (var i in allfollowers) {
                        var table = document.getElementById("dynamictable");
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = allfollowers[i].login;
                        cell2.innerHTML = `<img src="${allfollowers[i].avatar_url}"  style="height: 200px; width: 200px;">`
                    }
                })

            });
    }
}


// function setdata(data) {
//  if (true) {
//     var newdata = data;
//document.getElementById("123").innerHTML = newdata
//console.log(newdata);
// }
// }