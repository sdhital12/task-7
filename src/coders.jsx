function knowEachCoder(user){
    return (
        <>
        <div className="profile">
            <h3>Name: 
                {user.name}
            </h3>
            <p>Age: {user.age}</p>
            <p>{user.hobbies.map(function (hobby) {
                return (
                    <>
                    
                    <li>{user.name} has interest in {hobby}</li>
                    
                    </>
                );
            })}
                </p>
                <p>{user.bio}</p>
        </div>
        
        </>
    )
}

export default knowEachCoder;