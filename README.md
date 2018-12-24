# DB設計
## messagesテーブル
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

### Association
- has_many :groups, though: :members
- has_many :members
- has_many :messages
