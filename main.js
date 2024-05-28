document.addEventListener("DOMContentLoaded", function() {
    // 토픽 리스트
    var topics = [
        {
            image: "img/rythm_game.jpg",
            title: "리듬 게임",
            content: "리듬 게임은 플레이어가 리듬이나 음악에 맞춰서 조작하거나 동작을 취하거나 게임 진행에 있어 음악이나 리듬이 주 요소가 되는 게임 장르이다. 플레이어가 장치를 조작해서 음악을 만든다는 측면에서 사운드 시뮬레이션 게임이라고도 부른다. 리듬게임의 인식이 주로 씹덕게임으로 인식되는데, 실제 씹덕게임인 경우도 있지만 그렇지 않은 리듬게임도 많이 있다는 것을 알려주기 위해 리듬게임을 주제로 선정해보았습니다. 제가 소개하는 리듬게임은 osu!, arcaea, DJmax가 있습니다. 제가 해본 게임중에서 재밌었던 리듬게임을 선정해 보았습니다. 아래에서 자세히 설명하겠지만 간단히 설명해보면 osu!는 보통 노트가 내려와 타이밍에 맞춰 누르는 게임도 있지만 다양한 방식의 플레이 방법을 가지고 있어 선정해보았습니다. arcaea는 처음 해보았을 때 기존의 리듬게임은 같은 줄에 노트가 있는데 arcaea는 2줄로 이루어져 있어서 재미있게 해보았던 게임입니다. 마지막으로는 DJmax인데 이 게임은 제가 생각하기에 가장 보편적인 리듬게임이라고 생각하여 가져왔습니다.",
            link: "topic1.html"
        },
        {
            image: "https://img.freepik.com/premium-photo/back-view-gamer-playing-video-games-futuristic-interior_168310-197.jpg",
            title: "리얼리즘 게임",
            content: "즐겨하던 FPS게임이나 생존 게임이 지루하신가요? 혹은 하드코어를 즐기는 유저인가요? 사실적으로 묘사한 생동감 넘치는 두 게임을 소개합니다. 리뷰로 이동하려면 왼쪽 이미지를 클릭하세요.",
            link: "PSH.html"
        },
        {
            image: "img/smb.png",
            title: "플랫포머 게임",
            content: "달리고, 점프하고, 공격하세요! 이 모든건 플랫폼 위에서 이루어집니다. 당신의 취향에 맞는 다양한 액션을 원하나요? 유명하지 않은, 숨은 갓겜을 찾고싶나요? 그렇다면 지금 당장 이미지를 클릭하세요!",
            link: "flatformer.html"
        },
    ];

    var currentTopicIndex = 0;

    setTopic(currentTopicIndex);

    document.querySelector(".next_btn").addEventListener("click", function() {
        currentTopicIndex++;
        if (currentTopicIndex >= topics.length) {
            currentTopicIndex = 0;
        }
        setTopic(currentTopicIndex);
    });

    document.querySelector(".prev_btn").addEventListener("click", function() {
        currentTopicIndex--;
        if (currentTopicIndex < 0) {
            currentTopicIndex = topics.length - 1;
        }
        setTopic(currentTopicIndex);
    });

    document.getElementById("topic_img").addEventListener("click", function() {
        window.location.href = topics[currentTopicIndex].link;
    });

    function setTopic(index) {
        var topic = topics[index];
        document.getElementById("topic_img").src = topic.image;
        document.getElementById("detail_topic").textContent = topic.title;
        document.getElementById("detail_text").textContent = topic.content;
        document.getElementById("topic_name").textContent = topic.title;
        document.getElementById("topic_per").textContent = String(currentTopicIndex + 1) + "/" + String(topics.length);
    }
});
