---
title: 理解 Gorm 使用与源码分析 
icon: article
date: 2023-06-07 14:26:21
category:
  - 开源精选
tag:
  - gorm
---

# 安装
```bash
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite
```

# 快速入门
```go
package main

import (
  "gorm.io/gorm"
  "gorm.io/driver/sqlite"
)

type Product struct {
  gorm.Model
  Code  string
  Price uint
}

func main() {
  db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
  if err != nil {
    panic("failed to connect database")
  }

  // 迁移 schema
  db.AutoMigrate(&Product{})

  // Create
  db.Create(&Product{Code: "D42", Price: 100})

  // Read
  var product Product
  db.First(&product, 1) // 根据整型主键查找
  db.First(&product, "code = ?", "D42") // 查找 code 字段值为 D42 的记录

  // Update - 将 product 的 price 更新为 200
  db.Model(&product).Update("Price", 200)
  // Update - 更新多个字段
  db.Model(&product).Updates(Product{Price: 200, Code: "F42"}) // 仅更新非零值字段
  db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"})

  // Delete - 删除 product
  db.Delete(&product, 1)
}
```
`db.AutoMigrate(&Product{})`这段代码使用了 GORM 库的 AutoMigrate 方法，作用是将 Go 语言中的 Product 结构体映射到数据库中的表，并自动创建或更新表结构以匹配 Product 结构体的定义。

具体来说，&Product{} 是一个指向 Product 结构体的指针，传入 AutoMigrate 方法中表示需要将 Product 对象的属性映射到数据库表的字段上。如果数据库中已经存在名为 products 的表，则 AutoMigrate 方法会检查该表的结构是否与 Product 结构体匹配，如果不匹配则会自动更新表结构以适应 Product 的定义。如果数据库中不存在 products 表，则 AutoMigrate 方法会自动创建该表，并根据 Product 结构体的定义创建相应的字段和约束。

通过这段代码，我们可以方便地将 Go 语言中的结构体类型映射到数据库表，并保持二者的同步。这是一种方便的 ORM（对象关系映射）技术，可以大大简化数据库操作的代码。



## 参考资料

[GORM文档](https://gorm.io/zh_CN/)