function debtAdapter(item) {
  const newItem = {
    public_id: item.public_id,
    name: item.name,
    amount: item.amount,
    type: item.type,
    description: item.description,
    status: item.status,
    created_at: item.created_at,
    updated_at: item.updated_at,
    deleted_at: item.deleted_at,
  };

  return newItem;
}

export default debtAdapter;
