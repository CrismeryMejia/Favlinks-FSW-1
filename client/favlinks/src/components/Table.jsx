function TableHeader() {
    /* responsible for rendering the head of our table with the appropriate columns */
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
 }
 
 function TableBody({ linkData, removeLink }) {
   
    return (
        <tbody>
            {linkData.map((link, index) => (
                <tr key={index}>
                    <td>{link.name}</td>
                    <td><a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a></td>
                    <td><button onClick={() => removeLink(index)}>Delete</button></td>
                </tr>
            ))}
        </tbody>
    );
 }
 
 function Table({ linkData, removeLink }) {
    return (
        <table>
            <TableHeader />
            <TableBody linkData={linkData} removeLink={removeLink} />
        </table>
    );
 }
 
 export default Table;
 