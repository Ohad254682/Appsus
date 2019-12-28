export const notesData = [
    {
        type: "noteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        id: '111aaabb'
    },
    {
        type: "noteImg",
        info: {
            url: "../../../assets/images/Sea_Otter.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        },
        id: '111aaacc'
    },
    {
        type: "noteTodos",
        info: {
            label: "How was it:",
            todos: [
                { id:'1112227', txt: "Do that", doneAt: null },
                { id: '1112226', txt: "Do this", doneAt: 187111111 }
            ]
        },
        id: '111aaadd'
    },
    {
        type: "noteVideo",
        info: {
            label: "You won't believe what happens next:",
            url: "https://www.youtube-nocookie.com/embed/F3EsDDp4VXg"
        },
        id: '111aa22dd'
    }
]