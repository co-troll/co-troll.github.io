const skillTabs = [skillAll, skillFE, skillBE, skillLa];

const skillList = [
    [Shtml, Scss, Sjs, Sts, Snode, Sreact, Smysql],
    [Shtml, Scss, Sjs, Sreact],
    [Snode, Smysql],
    [Sjs, Sts]
]


skillTabs.forEach((El, index) => {
    El.addEventListener("click", () => {
        skillList[0].forEach((skill) => {
            skill.style.display = "none";
        })
        skillTabs.forEach((tab) => {
            tab.style = "";
        })
        El.style.borderBottomColor = "black";
        El.style.color = "black";
        skillList[index].forEach((skill) => {
            skill.style.display = "flex";
        })
    })
})

projectList = [

]


