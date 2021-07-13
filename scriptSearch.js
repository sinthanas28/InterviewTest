$(document).ready(function () {
    var user = ''
    $("#Search").click(function (event) {
        event.preventDefault()
        var username = $("#username").val()
        searchUser(username)
    })

    function searchUser(username) {
        $("#result").empty()
        $.get("http://api.github.com/search/users?q=" + username + "+in:user&per_page=100", function (data) {
            console.log(data)
            data.items.forEach(item => {
                user = ` <div class="container">
                            <div class="card mb-3" style="max-width: 540px;">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img class="card-img-top" src="${item.avatar_url}" alt="">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title" style="width: 250px; margin: 20px;">${item.login}</h5>
                                            <a href="repository.html?user=${item.login}" class="btn btn-primary" style="width: 250px; margin: 20px;">View Repository</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
                
                $("#result").append(user);
                
            });

        })
    }
})




