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
            image: "img/fps.webp",
            title: "topic2",
            content: "Contents of Topic 2",
            link: "https://www.naver.com"
        },
        {
            image: "img/fps.webp",
            title: "topic3",
            content: "Contents of Topic 3",
            link: "https://www.naver.com"
        },
        {
            image: "img/fps.webp",
            title: "coming soon",
            content: "coming soon",
            link: "notyet.html"
        },
        {
            image: "img/fps.webp",
            title: "coming soon",
            content: "coming soon",
            link: "notyet.html"
        },
        {
            image: "img/fps.webp",
            title: "coming soon",
            content: "coming soon",
            link: "notyet.html"
        },
        {
            image: "img/fps.webp",
            title: "coming soon",
            content: "coming soon",
            link: "notyet.html"
        },
        {
            image: "img/fps.webp",
            title: "coming soon",
            content: "coming soon",
            link: "notyet.html"
        },
        {
            image: "img/fps.webp",
            title: "coming soon",
            content: "coming soon",
            link: "notyet.html"
        },
        {
            image: "img/fps.webp",
            title: "coming soon",
            content: "coming soon",
            link: "notyet.html"
        }
        // 추가적인 토픽 정보들을 추가할 수 있습니다.
    ];

    var currentTopicIndex = 0; // 현재 토픽 인덱스

    // 초기 토픽 설정
    setTopic(currentTopicIndex);

    // 다음 버튼 클릭 시
    document.querySelector(".next_btn").addEventListener("click", function() {
        currentTopicIndex++;
        if (currentTopicIndex >= topics.length) {
            currentTopicIndex = 0; // 마지막 토픽에 도달하면 처음으로 돌아감
        }
        setTopic(currentTopicIndex);
    });

    // 이전 버튼 클릭 시
    document.querySelector(".prev_btn").addEventListener("click", function() {
        currentTopicIndex--;
        if (currentTopicIndex < 0) {
            currentTopicIndex = topics.length - 1; // 첫 번째 토픽에서 이전으로 가면 마지막 토픽으로 이동
        }
        setTopic(currentTopicIndex);
    });

    // 토픽 이미지를 클릭 시 링크로 이동
    document.getElementById("topic_img").addEventListener("click", function() {
        window.location.href = topics[currentTopicIndex].link;
    });

    // 토픽을 설정하는 함수
    function setTopic(index) {
        var topic = topics[index];
        document.getElementById("topic_img").src = topic.image;
        document.getElementById("detail_topic").textContent = topic.title;
        document.getElementById("detail_text").textContent = topic.content;
        document.getElementById("topic_name").textContent = topic.title;
        document.getElementById("topic_per").textContent = String(currentTopicIndex + 1) + "/" + String(topics.length);
    }
});
