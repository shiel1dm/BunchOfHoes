async function deletePost(event) {
    console.log("goodclick")
    event.preventDefault();
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];
    console.log("POST ID" + post_id);
    const response = await fetch('/blogRoutes/' + post_id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#delete-post-btn').addEventListener('click', deletePost);