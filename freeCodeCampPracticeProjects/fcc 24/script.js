// Project 24 Forum Leaderboard

//Fetch API, promises, Async/Await, and the try..catch statement

const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

//done
const timeAgo = (time) =>{
    const currentTime = new Date();
    const lastPost = new Date(time);

    //fucking fcc has no instructions here
    const timeDifference =  currentTime - lastPost;
    const msPerMinute = 1000 * 60; 
    const minutesAgo = Math.floor(timeDifference/msPerMinute);
    const hoursAgo = Math.floor(minutesAgo/60);
    const daysAgo = Math.floor(hoursAgo/24);

    if(minutesAgo < 60){
        return `${minutesAgo}m ago`;
    }

    if(hoursAgo < 24){
        return `${hoursAgo}h ago`;
    }

    return `${daysAgo}d ago`;
};//done

const viewCount =() =>{};

//done
const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);
        const data = await res.json();
        console.log(data);

        showLatestPosts(data);
    } catch (err) {
        console.log(err);
    }
};//done

const showLatestPosts =(data) => {
    const {topic_list, users} = data;
    const {topics}  = topic_list;
    
    //populating the data inside the postsContainer
    postsContainer.innerHTML =  topics.map((item)=>{
        const {id, 
            title, 
            views, 
            posts_count, 
            slug, 
            posters,
            category_id,
            bumped_at,} = item;

            return `<tr>
                        <td><p class="post-title">${title}</p></td>
                        <td></td>
                        <td>${posts_count - 1}</td>
                        <td>${views}</td>
                        <td>${timeAgo(bumped_at)}</td>
                    </tr>`;
    }).join("");
};

fetchData();
