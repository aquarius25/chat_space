# chat-space DB設計
## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

---

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false, unipue: true|
|email|string|null: false|
|message_id|string|null: false|
|group_id|string|null false|


### Association
- has_many :groups, though: :members
- has_many :members
- has_many :messages

---

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unipue: true|
|message_id|string|null: false|
|users_id|string|null: false|

### Association
- has_many :messages
- has_many :users, though: :mem
- has_many :members

---
