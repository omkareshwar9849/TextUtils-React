
import React from 'react'

export default function Books(props) {
    
    const bkgstyle = (mode) => {
        if(mode === 'light') {
            return {
                backgroundColor: '#ffffff',
                color: '#000000'
            }
        }
        else if(mode === 'dark') {
            return {
                backgroundColor: '#1a1a1a',
                color: '#ffffff'
            }
        }
        else if(mode === 'purple') {
            return {
                backgroundColor: '#6f42c1',
                color: '#ffffff'
            }
        }
        else {
            return {
                backgroundColor: '#ffffff',
                color: '#000000'
            }
        }
    }
    
    const mockBooks = [
        {
            name: 'The Great Gatsby',
            price: 12.99,
            description: 'A classic novel about the American Dream set in the Jazz Age.'
        },
        {
            name: 'To Kill a Mockingbird',
            price: 14.99,
            description: 'A gripping tale of racial injustice and childhood innocence in the American South.'
        },
        {
            name: '1984',
            price: 13.99,
            description: 'A dystopian novel depicting a totalitarian society and the struggle for freedom.'
        },
        {
            name: 'Pride and Prejudice',
            price: 11.99,
            description: 'A romantic novel exploring themes of love, marriage, and social class in Regency England.'
        },
        {
            name: 'The Catcher in the Rye',
            price: 10.99,
            description: 'A coming-of-age novel following the journey of a teenage protagonist through New York City.'
        },
        {
            name: 'Brave New World',
            price: 15.99,
            description: 'A science fiction novel exploring a futuristic society built on stability and conformity.'
        }
    ]
    
    return (
        <div className="container mt-5" style={bkgstyle(props.mode)}>
            <h1>Books Catalog</h1>
            {mockBooks.length === 0 ? (
                <div className="alert alert-info">
                    No books available
                </div>
            ) : (
                <ul className="list-group">
                    {mockBooks.map((book, index) => (
                        <li key={index} className="list-group-item" style={bkgstyle(props.mode)}>
                            <h5><strong>{book.name || 'Untitled'}</strong></h5>
                            <p className="text-muted">Price: ${book.price !== undefined ? book.price.toFixed(2) : 'Price not available'}</p>
                            <p>{book.description || 'No description available'}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
