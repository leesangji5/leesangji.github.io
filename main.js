document.addEventListener("DOMContentLoaded", function() {
    // 토픽 리스트
    var topics = [
        {
            image: "img/fps.webp",
            title: "topic1",
            content: "Contents of Topic 1"
        },
        {
            image: "img/fps.webp",
            title: "topic2",
            content: "Contents of Topic 2"
        },
        {
            image: "img/fps.webp",
            title: "topic3",
            content: "Contents of Topic 3"
        },
        {
            image: "img/fps.webp",
            title: "topic4",
            content: "Contents of Topic 4"
        },
        {
            image: "img/fps.webp",
            title: "topic5",
            content: "Contents of Topic 5"
        },
        {
            image: "img/fps.webp",
            title: "topic6",
            content: "Contents of Topic 6"
        },
        {
            image: "img/fps.webp",
            title: "topic7",
            content: "Contents of Topic 7"
        },
        {
            image: "img/fps.webp",
            title: "topic8",
            content: "Contents of Topic 8"
        },
        {
            image: "img/fps.webp",
            title: "topic9",
            content: "Contents of Topic 9"
        },
        {
            image: "img/fps.webp",
            title: "topic10",
            content: "Contents of Topic 10"
        }
        // 추가적인 토픽 정보들을 추가할 수 있습니다.
    ];

    for(var i=0; i<topics.length; i++){
        document.getElementById("topic"+String(i+1)).textContent = topics[i].title;
    }

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


    // 토픽을 설정하는 함수
    function setTopic(index) {
        var topic = topics[index];
        document.getElementById("topic_img").src = topic.image;
        document.getElementById("detail_topic").textContent = topic.title;
        document.getElementById("detail_text").textContent = topic.content;topic_per
        document.getElementById("topic_name").textContent = topic.title;
        document.getElementById("topic_per").textContent = String(currentTopicIndex+1)+"/"+String(topics.length);
    }
});