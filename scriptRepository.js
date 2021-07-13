$("#re").empty()
var url = window.location.href;
console.log(url)
var user = url.split("=")
// console.log(user)
$.get("https://api.github.com/users/"+user[1]+"/repos", function (data) {
    var i = 0
        data.forEach(data => {
        i++
        user = `<div class="container">
                    <div class="row">
                        <div class="col-sm-8" style="text-align: center;">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-text" style="text-align: center;">${data.name}</p>
                                    <a download href="https://codeload.github.com/${data.full_name}/zip/refs/heads/${data.default_branch}" class="btn btn-primary" style="width: 300px;">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        $("#re").append(user);
    });

})
