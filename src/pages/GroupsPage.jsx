import React, { useState } from 'react';

// NEW: Accept props from App.jsx
function GroupsPage({ groups, onCreateGroup }) {
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateGroup(groupName, members);
    // Clear the form
    setGroupName('');
    setMembers('');
  };

  return (
    <div className="groups-page">
      {/* Box for creating a new group */}
      <div className="card add-group-form">
        <h2>Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Group Name (e.g., 'Roommates')"
            value={groupName}
            onChange={(e) => setGroupName(e.g.target.value)}
          />
          <input
            type="text"
            placeholder="Members (comma-separated, e.g., 'Me, Rohan, Anya')"
            value={members}
            onChange={(e) => setMembers(e.g.target.value)}
          />
          <button type="submit">Create Group</button>
        </form>
      </div>

      {/* Box for listing existing groups */}
      <div className="card group-list">
        <h2>My Groups</h2>
        {groups.length === 0 ? (
          <p>You haven't created any groups yet.</p>
        ) : (
          <ul>
            {groups.map(group => (
              <li key={group.id} className="group-item">
                <h3>{group.name}</h3>
                <p>Members: {group.members.join(', ')}</p>
                {/* We will make this button functional later */}
                <button className="view-group-btn">View Details</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GroupsPage;