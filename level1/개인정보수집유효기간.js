// https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript
function makeTermsObj(terms) {
    let obj = {};
    terms.map((_term) => {
        const splitedTerm = _term.split(" ");
        obj[splitedTerm[0]] = splitedTerm[1]; 
    })
    return obj;
}

function addMonth(origin, month) {
    const newDate = new Date(origin);
    newDate.setMonth(newDate.getMonth() + Number(month));
    newDate.setDate(newDate.getDate() - 1);
    return newDate;
}

function 개인정보수집유효기간(today, terms, privacies) {
    const _today = new Date(today);
    const addTermsObj = makeTermsObj(terms);
    let results = [];
    const portedPrivacies = privacies.map((_privacy) => {
        return _privacy.replaceAll(".", "-");
    });

    portedPrivacies.forEach((_privacy, index) => {
        const _date = new Date(_privacy.split(" ")[0]); 
        const _obj = _privacy.split(" ")[1]; 
        if(_today >= addMonth(_date, addTermsObj[_obj])) {
            results.push(index + 1);
        }
    });

    return results;
}

console.log(개인정보수집유효기간("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));
console.log(개인정보수집유효기간("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]));
  