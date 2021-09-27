window.onload = function(e) {
    about = document.getElementById("aboutMenu")
    about.onclick = scrollTo
    project = document.getElementById("projectMenu")
    project.onclick = scrollTo
    achievements = document.getElementById("achievementsMenu")
    achievements.onclick = scrollTo
    resume = document.getElementById("resumeMenu")
    resume.onclick = scrollTo
    aboutSection = document.getElementById("about")
    projectSection = document.getElementById("projects")
    achievementsSection = document.getElementById("achievements")
    resumeSection = document.getElementById("resume")


    menu = document.getElementsByClassName("menuContainer")[0]
    NavButton.onclick = () => {
        menu.classList.toggle('menuOpen');
    }

    if (window.location.hash && !document.documentElement.scrollTop && document.body.scrollTop) {
        let hash = window.location.hash.substr(1)
        let section = document.getElementById(hash.toLowerCase())
        section.scrollIntoView()
    }

    window.addEventListener('hashchange', scrollTo, false);
    let mainContent = document.body.onscroll = onScrollContent;
    onScrollContent({ target: mainContent })
}

function scrollTo() {
    let hash = window.location.hash.substr(1)
    let section = document.getElementById(hash.toLowerCase())
    section.scrollIntoView({ behavior: 'smooth' });
}

function onScrollContent(e) {
    if (document.documentElement.scrollTop > 0) {
        target = document.documentElement
    } else {
        target = document.body
    }


    let threshold = 0.1 * aboutSection.offsetHeight;
    if (resumeSection.offsetTop <= target.scrollTop + threshold) {
        if (window.location.hash != '#Resume') history.pushState(null, null, '#Resume');
        about.className = "";
        project.className = "";
        achievements.className = "";
        resume.className = "activeMenu";
    } else if (achievementsSection.offsetTop <= target.scrollTop + threshold) {
        if (window.location.hash != '#Achievements') history.pushState(null, null, '#Achievements');
        about.className = "";
        project.className = "";
        achievements.className = "activeMenu";
        resume.className = "";
    } else if (projectSection.offsetTop <= target.scrollTop + threshold) {
        if (window.location.hash != '#Projects') history.pushState(null, null, '#Projects');
        about.className = "";
        project.className = "activeMenu";
        achievements.className = "";
        resume.className = "";
    } else if (aboutSection.offsetTop <= target.scrollTop + threshold) {
        if (window.location.hash != '') history.pushState(null, null, '');
        about.className = "activeMenu";
        project.className = "";
        achievements.className = "";
        resume.className = "";
    }

}