db.createRole({
  role: "courseReadWrite",
  privileges: [
    {
      resource: { db: "ecf_ccp2", collection: "course" },
      actions: ["find", "insert", "update", "remove"]
    }
  ],
  roles: []
})

db.createUser({
  user: "app_user",
  pwd: "AppUser123!",
  roles: [ { role: "courseReadWrite", db: "ecf_ccp2" } ]
})
