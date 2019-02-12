function solve(string) {
    let pattern = /<svg>.*<\/svg>/g
    let isValid = pattern.exec(string)
    let surveyLabel = ''
    let finalRating = 0
    let finalVoteCount = 0
    if (isValid !== null) {
        let survey = isValid.toString()
        pattern = /<cat><text>.*\[([a-zA-Z -]+)]<\/text><\/cat>/g
        isValid = pattern.exec(survey)
        if (isValid !== null) {
            surveyLabel = isValid[1]
            survey = survey.slice(isValid[0].length + 5)
            pattern = /<cat>.+<\/cat>/g
            isValid = pattern.exec(survey)
            survey = survey.slice(5)
            if (isValid !== null) {
                pattern = /<g><val>(.*?)<\/val>(.*?)<\/g>/
                isValid = pattern.exec(survey)
                while (isValid !== null) {
                   let [all, rating, voteCount] = isValid
                    survey = survey.slice(isValid[0].length)
                    isValid = pattern.exec(survey)
                    rating = +rating
                    voteCount = +voteCount
                    if (voteCount !== Number(voteCount) || rating !== Number(rating) || rating < 1 || rating > 10 || voteCount < 0 ) {
                       continue
                    }
                    finalRating += +rating * +voteCount
                    finalVoteCount += +voteCount
                }
                finalRating = parseFloat((finalRating / finalVoteCount).toFixed(2))
                if (finalRating === Number(finalRating)) {
                    console.log(`${surveyLabel}: ${finalRating}`)
                } else {
                    console.log('Invalid format')
                }
            } else {
                console.log('Invalid format')
            }
        } else {
            console.log('Invalid format')
        }
    } else {
        console.log('No survey found')
    }
}

//solve('<svg><cat><text>Which is your favourite meal from our selection? [dsadsadsa]</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>\n')
//solve('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>\n')
solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')