DELETE from vehicles
where id=$1
RETURNING *;