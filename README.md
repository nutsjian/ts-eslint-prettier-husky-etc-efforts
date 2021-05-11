# ts-eslint-prettier-husky-etc-efforts

```bash
# 1. 直接执行 git cz
# No files added to staging! Did you forget to run git add?
git cz

# 2. 先执行 git add .，再执行 git cz。结果如下：
? Select the type of change that you're committing:
ravis, Circle, BrowserStack, SauceLabs)
  chore:    Other changes that don't modify src or test files
  revert:   Reverts a previous commit
❯ feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, for

# 3. 选择 feat 后，提示信息如下：
? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter t
o skip)

# 4. 输入 index.ts 后回车，信息如下：
? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter t
o skip) index.ts
? Write a short, imperative tense description of the change (max 84 chars):

# 5. 输入 add index.ts for git cz test 后回车，信息如下：
? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter t
o skip) index.ts
? Write a short, imperative tense description of the change (max 84 chars):
 (28) add index.ts for git cz test
? Provide a longer description of the change: (press enter to skip)

# 6. 输入 add index.ts, longer description, just make some words, some words, some words. 后回车，信息如下：
? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter t
o skip) index.ts
? Write a short, imperative tense description of the change (max 84 chars):
 (28) add index.ts for git cz test
? Provide a longer description of the change: (press enter to skip)
 add index.ts, longer description, just make some words, some words, some words.
? Are there any breaking changes? (y/N)

# 7. 输入 y 后回车，确认无误，信息如下：
? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter t
o skip) index.ts
? Write a short, imperative tense description of the change (max 84 chars):
 (28) add index.ts for git cz test
? Provide a longer description of the change: (press enter to skip)
 add index.ts, longer description, just make some words, some words, some words.


? Are there any breaking changes? Yes
? Describe the breaking changes:

# 8. 输入 breaking changes: add index.ts breaking changes message, some words. 回车后，信息如下：
? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter t
o skip) index.ts
? Write a short, imperative tense description of the change (max 84 chars):
 (28) add index.ts for git cz test
? Provide a longer description of the change: (press enter to skip)
 add index.ts, longer description, just make some words, some words, some words.


? Are there any breaking changes? Yes
? Describe the breaking changes:
 add index.ts breaking changes message, some words.
? Does this change affect any open issues? (y/N)

# 9. 本次修改没有对应的 issues，所以输入 N 后回车，信息如下：
? Does this change affect any open issues? No
[main 6d29147] feat(index.ts): add index.ts for git cz test
 9 files changed, 2541 insertions(+), 1 deletion(-)
 create mode 100644 .eslintrc.js
 create mode 100644 .gitignore
 create mode 100644 .prettierrc.js
 create mode 100644 .vcmrc
 create mode 100644 package.json
 create mode 100644 src/index.ts
 create mode 100644 tsconfig.json
 create mode 100644 yarn.lock

# 10. 发现没有生效 git commit 前的检查，那应该是 husky 配置有问题，使用方法有问题

```


#### husky 使用
```bash
# 1. 在 package.json 中添加脚本："prepare": "husky install"
npm set-script prepare "husky install"
# 2. 执行脚本安装 husky
yarn prepare
# 3. 添加一个 hook
npx husky add .husky/pre-commit "yarn test"
# 4. make a commit
git commit -m "keep clam and commit"
```

#### husky v6 新版使用
```bash
# 在新版husky中$HUSKY_GIT_PARAMS这个变量不再使用了，取而代之的是$1。在新版husky中我们的commit-msg脚本内容如下：

yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

#--no-install 参数表示强制npx使用项目中node_modules目录中的commitlint包
npx --no-install commitlint --edit $1

# 这个脚本应该也能使用类似于npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"这样的命令进行添加
```



lint-staged过滤文件采用glob模式。


### 参考文章
1. https://blog.typicode.com/husky-git-hooks-javascript-config/
2. https://blog.csdn.net/qq_21567385/article/details/116429214
3. https://typicode.github.io/husky/#/?id=bypass-hooks

4. ESLint相关文档
4.1 https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN&rule=typescript
4.2 https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md
4.3 https://cloud.tencent.com/developer/section/1135595
