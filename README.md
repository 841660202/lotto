```sh
.
├── README.md
├── big_lotto # 爬取的excel
│   ├── 2007.xlsx
│   ├── 2008.xlsx
│   ├── 2009.xlsx
│   ├── 2010.xlsx
│   ├── 2011.xlsx
│   ├── 2012.xlsx
│   ├── 2013.xlsx
│   ├── 2014.xlsx
│   ├── 2015.xlsx
│   ├── 2016.xlsx
│   ├── 2017.xlsx
│   ├── 2018.xlsx
│   ├── 2019.xlsx
│   └── 2020.xlsx
├── consts.js # 常量
├── index.js  # 启动入口
├── out.xlsx  # 合并输出文件
├── package.json
├── test      # 测试文件
│   ├── combine_excel.js
│   ├── mkdir.js
│   └── schedule.js
└── utils
    ├── big_lotto_cherrio.js # 大乐透爬数据
    ├── big_lotto_cherrio_trans.js  # 大乐透数据转换
    ├── big_lotto_write.js  # 大乐透写文件
    ├── combine_excel.js  # 合并excel
    ├── mkdir.js    # 生成文件夹
    └── schedule.js # 调度器

3 directories, 28 files



```

```
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:841660202/lotto.git
git push -u origin main

```
