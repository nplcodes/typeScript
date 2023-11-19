"use strict";
var issues;
(function (issues) {
    issues["academics"] = "pizzo";
    issues[issues["logistics"] = 3] = "logistics";
    issues[issues["personal"] = 4] = "personal";
    issues[issues["welfare"] = 5] = "welfare";
})(issues || (issues = {}));
const myIssue = issues.academics;
console.log(myIssue);
