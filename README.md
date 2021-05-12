# ts-eslint-prettier-husky-etc-efforts
本项目主要学习如何搭建一个 TS 项目，规范编码、GIT提交。通过本项目的搭建，可以学习如下的知识：husky commitzen commitlint gitmoji lint-staged。

#### commitzen
commitzen 是撰写符合 Commit Message 标准的一款工具，Commit Message 标准格式包括三个部分：Header、Body、Footer。
```bash
<type>(<scope>): <subject>
# 空一行
<body>
# 空一行
<footer>
```
其中，Header是必需的，Body 和 Footer可以省略。

##### Header
Header 部分只有一行，包括三个字段：type（必需）、scope（可选）、subject（必需）
+ type：用于说明类型。可分以下几种类型：
  - feat：新功能（a new feature）
  - fix：修复bug（A bug fix）
  - improvement：对当前功能的改进（An improvement to a current feature）
  - docs：仅包含文档的修改（Documentation only changes）
  - style：格式化变动，不影响代码逻辑。比如清除多余空白，删除分号等
  - refactor：重构，即不是新增功能，也不是修改 bug 的代码变动
  - perf：提高性能的修改（A code change that improves performance）
  - test：添加或修改测试代码（Adding missing tests or correcting existing tests）
  - build：构建工具或外部依赖包的修改。比如更新依赖包的版本等（Changes that affects the build system or external dependencies）
  - ci：持续集成的配置文件或脚本的修改（Changes to our CI configuration files and scripts）
  - chore：杂项。其他不修改源代码或测试代码的修改（Other changes that don't modify src or test files）
  - revert：撤销某次提交（Reverts a pervious commit）
+ scope：用于说明影响的范围，比如数据层、控制层、视图层等等。
+ subject：主题，简短描述。一行

##### Body
对 subject 的补充。可以多行。

##### Footer
主要是一些关联 issue 的操作。

Commitizen 是一个撰写符合上面 Commit Message 标准的一款工具。

##### Commitizen 全局安装使用
```bash
# 1. install
yarn add commitizen cz-conventional-changelog -g -d
# 2. ~/.czrc
{ "path": "cz-conventional-changelog" }
# 3. 这时就可以全局使用 git cz 命令来代替 git commit 命令了
```

##### Commitizen 局部安装使用
```bash
# 1. install
yarn add commitzen -D -d
# 2. config package.json
{
 "scripts": {
   "commit": "git-cz",
 },
 "config": {
   "commitizen": {
     "path": "node_modules/cz-conventional-changelog"
   }
 }
}
# 3. 这时就可以使用 npm run commit 脚本了
```

##### 例子
```bash
# 1. 选择类型 feat
# 2. 输入此次影响的范围 scope
# 3. 输入这次提交的主题（write a short, imperative.....）
# 4. 输入这次提交的详细信息（如没有，可直接跳过）
# 5. 这次提交是否有突破性变化（Are there any breaking changes?）（是否不向下兼容，注意如果输入 y，会有新的提示）
# 6. 这次提交是否有关联的 issues（Does this change affect any open issues?）（如果输入 y，会有新的提示）
```
##### 上述例子具体的信息如下：
```bash
# 1. 直接执行 git cz 或 yarn commit
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
```

#### commitlint
代码的提交规范和规范的校验。配合 husky 在 commit-msg 前做校验。

```bash
# 1. install
yarn add @commitlint/cli @commitlint/config-conventional -D -d

# 2. touch commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert']],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};

# 3. 一般我们配合 husky 来对 git commit 的 Commit Message 做校验
# 前提是安装好了 husky
yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
```

#### gitmoji
```bash
# 1. 全局安装
yarn add gitmoji-cli -g -d

# 2. 在编写 Commit Message 的时候增加 emoji 信息即可
```

#### husky v6
husky 可以让我们向项目中方便添加 git hooks。可以通过这些 git hooks 来对代码做规范校验。

```bash
# 1. install
yarn add husky -D -d
# 2. 在 package.json 中添加脚本："prepare": "husky install"
npm set-script prepare "husky install"
# 3. 执行脚本安装 husky
yarn prepare
# 4. 添加一个 hook
npx husky add .husky/pre-commit "yarn test"


# 在新版husky中$HUSKY_GIT_PARAMS这个变量不再使用了，取而代之的是$1。在新版husky中我们的commit-msg脚本内容如下：
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'

#--no-install 参数表示强制npx使用项目中node_modules目录中的commitlint包
npx --no-install commitlint --edit $1
# 这个脚本应该也能使用类似于npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"这样的命令进行添加
```

#### lint-staged
用于实现每次提交只检查本次提交所修改的文件。如果不是这样的话，每次都对所有代码做编码规范校验，会大大增加校验的时间，降低开发的体验。lint-staged过滤文件采用glob模式。


# husky commitzen commitlint gitmoji lint-staged
### 参考文章
0. 搭建项目
0.1 https://www.jianshu.com/p/df14afcfdb03

1. Commitizen 参考文档
1.1 https://github.com/commitizen
1.2 https://zhuanlan.zhihu.com/p/132348944

2. husky 参考文档
2.1 https://blog.typicode.com/husky-git-hooks-javascript-config/
2.2 https://typicode.github.io/husky/#/?id=bypass-hooks
2.3 https://blog.csdn.net/qq_21567385/article/details/116429214

3. commitlint 参考文档
3.1 https://commitlint.js.org/#/reference-examples
3.2 https://www.cnblogs.com/qiqi715/p/12737297.html

4. gitmoji 参考文档
4.1 https://gitmoji.dev

5. lint-staged 参考文档

6. git 参考文档
6.1 https://www.jianshu.com/p/a9f327da3562
6.2 https://www.cnblogs.com/dongcanliang/p/11162235.html
6.3 https://blog.csdn.net/qq_32452623/article/details/78417609 暂存区概念，跟 lint-staged 插件有关系

4. ESLint 参考文档
4.1 https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN&rule=typescript
4.2 https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md
4.3 https://cloud.tencent.com/developer/section/1135595
