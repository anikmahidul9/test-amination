import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useCodeAnimation from './animetedtext'


function App() {
  const code = `function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
      return {...styleObject, ...style[className]};
    }, {});
  }
  
  function createClassNameString(classNames) {
    return classNames.join(' ');
  }
  
  // this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully
  
  function createChildren(style, useInlineStyles) {
    let childrenCount = 0;
    return children => {
      childrenCount += 1;
      return children.map((child, i) => createElement({
        node: child,
        style,
        useInlineStyles,
        key:code-segment-countchildren
      }));
    }
  }
  
  function createElement({ node, style, useInlineStyles, key }) {
    const { properties, type, tagName, value } = node;
    if (type === "text") {
      return value;
    } else if (tagName) {
      const TagName = tagName;
      const childrenCreator = createChildren(style, useInlineStyles);
      const props = (
        useInlineStyles
        ? { style: createStyleObject(properties.className, style) }
        : { className: createClassNameString(properties.className) }
      );
      const children = childrenCreator(node.children);
      return <TagName key={key} {...props}>{children}</TagName>;
    }
  }
  function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
      return {...styleObject, ...style[className]};
    }, {});
  }
  
  function createClassNameString(classNames) {
    return classNames.join(' ');
  }
  
  // this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully
  
  function createChildren(style, useInlineStyles) {
    let childrenCount = 0;
    return children => {
      childrenCount += 1;
      return children.map((child, i) => createElement({
        node: child,
        style,
        useInlineStyles,
        key:code-segment-
      }));
    }
  }
  
  function createElement({ node, style, useInlineStyles, key }) {
    const { properties, type, tagName, value } = node;
    if (type === "text") {
      return value;
    } else if (tagName) {
      const TagName = tagName;
      const childrenCreator = createChildren(style, useInlineStyles);
      const props = (
        useInlineStyles
        ? { style: createStyleObject(properties.className, style) }
        : { className: createClassNameString(properties.className) }
      );
      const children = childrenCreator(node.children);
      return <TagName key={key} {...props}>{children}</TagName>;
    }
  }
  function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
      return {...styleObject, ...style[className]};
    }, {});
  }
  
  function createClassNameString(classNames) {
    return classNames.join(' ');
  }
  
  // this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully
  
  function createChildren(style, useInlineStyles) {
    let childrenCount = 0;
    return children => {
      childrenCount += 1;
      return children.map((child, i) => createElement({
        node: child,
        style,
        useInlineStyles,
        key:code-segment-countchildren
      }));
    }
  }
  
  function createElement({ node, style, useInlineStyles, key }) {
    const { properties, type, tagName, value } = node;
    if (type === "text") {
      return value;
    } else if (tagName) {
      const TagName = tagName;
      const childrenCreator = createChildren(style, useInlineStyles);
      const props = (
        useInlineStyles
        ? { style: createStyleObject(properties.className, style) }
        : { className: createClassNameString(properties.className) }
      );
      const children = childrenCreator(node.children);
      return <TagName key={key} {...props}>{children}</TagName>;
    }
  }
  function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
      return {...styleObject, ...style[className]};
    }, {});
  }
  
  function createClassNameString(classNames) {
    return classNames.join(' ');
  }
  
  // this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully
  
  function createChildren(style, useInlineStyles) {
    let childrenCount = 0;
    return children => {
      childrenCount += 1;
      return children.map((child, i) => createElement({
        node: child,
        style,
        useInlineStyles,
        key:code-segment-countchildren
      }));
    }
  }
  
  function createElement({ node, style, useInlineStyles, key }) {
    const { properties, type, tagName, value } = node;
    if (type === "text") {
      return value;
    } else if (tagName) {
      const TagName = tagName;
      const childrenCreator = createChildren(style, useInlineStyles);
      const props = (
        useInlineStyles
        ? { style: createStyleObject(properties.className, style) }
        : { className: createClassNameString(properties.className) }
      );
      const children = childrenCreator(node.children);
      return <TagName key={key} {...props}>{children}</TagName>;
    }
  }`
  const animatedCode= useCodeAnimation(code)
  return (
    <>
 
          <div className="animation">
            <SyntaxHighlighter
              language="jsx"
              style={nightOwl}
              className={"syntax"}
              customStyle={{ backgroundColor: "dark" }}
            >
              {animatedCode} {/* Render the animated code */}
            </SyntaxHighlighter>
          </div>
        
    </>
  )
}

export default App
