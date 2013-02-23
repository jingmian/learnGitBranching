exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C3%22%2C%22id%22%3A%22master%22%7D%2C%22bugFix%22%3A%7B%22target%22%3A%22C2%27%22%2C%22id%22%3A%22bugFix%22%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C2%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22bugFix%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git checkout -b bugFix;git commit;git checkout master;git commit;git checkout bugFix;git rebase master",
  "name": "Rebase Introduction",
  "hint": {
    "en_US": "Make sure you commit from bugFix first",
    "zh_CN": "\u786e\u4fdd\u4f60\u5148\u5728 bugFix \u5206\u652f\u8fdb\u884c\u63d0\u4ea4"
  },
  "disabledMap" : {
    "git revert": true
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git Rebase",
              "",
              "The second way of combining work between branches is *rebasing.* Rebasing essentially takes a set of commits, \"copies\" them, and plops them down somewhere else.",
              "",
              "While this sounds confusing, the advantage of rebasing is that it can be used to make a nice linear sequence of commits. The commit log / history of the repository will be a lot cleaner if only rebasing is allowed.",
              "",
              "Let's see it in action..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Here we have two branches yet again; note that the bugFix branch is currently selected (note the asterisk)",
              "",
              "We would like to move our work from bugFix directly onto the work from master. That way it would look like these two features were developed sequentially, when in reality they were developed in parallel.",
              "",
              "Let's do that with the `git rebase` command"
            ],
            "afterMarkdowns": [
              "Awesome! Now the work from our bugFix branch is right on top of master and we have a nice linear sequence of commits.",
              "",
              "Note that the commit C3 still exists somewhere (it has a faded appearance in the tree), and C3' is the \"copy\" that we rebased onto master.",
              "",
              "The only problem is that master hasn't been updated either, let's do that now..."
            ],
            "command": "git rebase master",
            "beforeCommand": "git commit; git checkout -b bugFix C1; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Now we are checked out on the `master` branch. Let's do ahead and rebase onto `bugFix`..."
            ],
            "afterMarkdowns": [
              "There! Since `master` was downstream of `bugFix`, git simply moved the `master` branch reference forward in history."
            ],
            "command": "git rebase bugFix",
            "beforeCommand": "git commit; git checkout -b bugFix C1; git commit; git rebase master; git checkout master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "To complete this level, do the following",
              "",
              "* Checkout a new branch named `bugFix`",
              "* Commit once",
              "* Go back to master and commit again",
              "* Check out bugFix again and rebase onto master",
              "",
              "Good luck!"
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git Rebase",
              "",
              "第二种合并不用分支工作的方法是 *衍合（rebasing）*。衍合就是取出一系列的提交，\"组合（compies）\"它们，然后把它们在某个地方重新放下来（重新实施一遍）。",
              "",
              "这可能看上去很难明白，而衍合的最大好处就是可以用来创造更线性的提交历史。假如一个项目只允许使用衍合（来合并工作），那么它的提交记录/历史会变得好看很多。",
              "",
              "让我们亲身体会下……"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "现在我们有两个分支，注意当前分支是 bugFix（看那颗星）",
              "",
              "我们想要把 bugfix 里面的工作直接移到 master 分支上。使用这个方法会让我们觉得这两个特性分支的工作是顺序提交的，但实际上它们是平行发展提交的。",
              "",
              "要做到这个效果，我们用 `git rebase`"
            ],
            "command": "git rebase master",
            "afterMarkdowns": [
              "碉堡吧，现在我们在 bugFix 分支上的工作已经移到了 master 的最前端，同时我们也得到了一个很好的直线型提交历史。",
              "",
              "注意一下提交 C3 其实还存在在我们的仓库的某个角落里（阴影的那货就是你了，还看什么看），而 C3' 是它一个在 master 分支上的\"拷贝\"提交。",
              "",
              "现在还有唯一一个问题就是 master 分支还没有更新……下面就来更新它吧"
            ],
            "beforeCommand": "git commit; git checkout -b bugFix C1; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "现在我们可以切换到了 `master` 分支。接下来就把它衍合到 `bugFix` 吧……"
            ],
            "command": "git rebase bugFix",
            "afterMarkdowns": [
              "看！因为 `master` 是 `bugFix` 的上游，所以 git 只把 `master` 分支的记录前进到 `bugFix` 上。"
            ],
            "beforeCommand": "git commit; git checkout -b bugFix C1; git commit; git rebase master; git checkout master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "想刷过这关，要按照下面的步骤来：",
              "",
              "* 切换到一个叫 `bugFix` 的新分支",
              "* 创建一个提交",
              "* 回到 master 分支并且创建另外一个提交",
              "* 再次切换到 bugFix 分支，然后把它衍合到 master 上",
              "",
              "祝你好运啦！"
            ]
          }
        }
      ]
    }
  }
};
