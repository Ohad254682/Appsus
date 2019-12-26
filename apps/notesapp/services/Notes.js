export const notesData = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        id: '111aaabb'
    },
    {
        type: "NoteImg",
        info: {
            url: "https://en.wikipedia.org/wiki/Sea_otter#/media/File:Sea_Otter_(Enhydra_lutris)_(25169790524)_crop.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        },
        id: '111aaacc'
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        },
        id: '111aaadd'
    }
]