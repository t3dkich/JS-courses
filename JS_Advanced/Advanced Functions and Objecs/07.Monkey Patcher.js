let solution = (() => {
    return {
        call: (post, command) => {
            let f = []

            let func = {
                upvote: () => {
                    post.upvotes++
                },
                downvote: (command) => {
                    post.downvotes++
                },
                score: (command) => {
                    let rating = ''

                    let [upvote, downvote] = [post.upvotes, post.downvotes]
                    let upvotePerc = upvote / (upvote + downvote) * 100
                    if (upvotePerc > 66 && upvote + downvote >= 10) {
                        rating = 'hot'
                        result()
                    } else {
                        if ((upvote > 100 || downvote > 100) && upvote - downvote >= 0) {
                            rating = 'controversial'
                        } else if (upvote - downvote < 0 && upvote + downvote >= 10) {
                            rating = 'unpopular'
                        } else if (upvote + downvote < 10 || rating === '') {
                            rating = 'new'
                        }
                        result()
                    }

                    function result() {
                        addPerc(Math.max(upvote, downvote))

                        function addPerc(e) {
                            if (upvote + downvote > 50) {
                                e = Math.ceil(e * 0.25)
                                f = [upvote + e, downvote + e, upvote - downvote, rating]
                            } else {
                                f = [upvote, downvote, upvote - downvote, rating]
                            }
                        }
                    }
                }

            }
            func[command]()
            if (f.length !== 0)
            return f
        }
    }
})()


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 4,
    downvotes: 5
};

solution.call(post, 'downvote');
solution.call(post, 'upvote');
solution.call(post, 'upvote');
for (let i = 0; i < 38; i++) {
    solution.call(post, 'upvote');
}
let dsa = solution.call(post, 'score')
console.log(dsa);
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// for (let i = 0; i < 50; i++) {
//     solution.call(post, 'downvote');
// }
// score = solution.call(post, 'score'); //[139, 189, -50, 'unpopular']
// solution.call(post, 'downvote'); //…        // (executed 50 times)
