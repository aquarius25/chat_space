
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
|name|string|null: false, unipue: true|
|email|string|null: false, unique: true|
|group_id|integer|null false|


### Association
- has_many :groups, though: :members
- has_many :members
- has_many :messages

---

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unipue: true|
|users_id|integer|null: false|

### Association
- has_many :messages
- has_many :users, though: :members
- has_many :members

---

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|

### Association
- belongs_to :user
- belongs_to :user




