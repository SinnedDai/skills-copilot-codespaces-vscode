function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsBtn = document.getElementById("memberSkillsBtn");
    var memberSkillsClose = document.getElementById("memberSkillsClose");
    memberSkillsBtn.onclick = function () {
        member.style.display = "none";
        memberSkills.style.display = "block";
    }
    memberSkillsClose.onclick = function () {
        member.style.display = "block";
        memberSkills.style.display = "none";
    }
}

