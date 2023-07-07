import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test ('rendered blog', () => {
    const blog = {
        "title": "How to make a cake",
        "author": "Martha Stewart",
        "url": "http://makecake.com",
        "likes": 10,
        "users": ["620e4a6ddfa39b9c0639df9f"]
    }

    render(<Blog blog={blog} />)

    const element = screen.getByText('How to make a cake')
    expect(element).toBeDefined()
})

/*test ('renderd content', () => {
    const blog = {
        "title": "How to make a cake",
        "author": "Martha Stewart",
        "url": "http://makecake.com",
        "likes": 10
    }

    render(<Blog blog={blog} />)

    const element = screen.getByText('How to make a cake')
    expect(element).toBeDefined()
}) */