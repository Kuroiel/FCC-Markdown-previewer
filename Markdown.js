
marked.setOptions({
  // gfm: true,
  breaks: true
  
});
const placeholder = 
`# H1 text

## H2 text

[link](https://www.fflogs.com)

Inline code: \`<p>Hello World</p>\`

\`\`\`
Code block:
if (code){
return code}

\`\`\`

- List
    - Item
    - Item

> Block quote

Image:

![UwU Lad](https://assets.change.org/photos/8/fg/ti/UIFgTimzYrFXRhi-800x450-noPad.jpg?1542785028)

**Bold text**
`



$(document).ready(function (){

 $('#editor').val(placeholder);
   $('#preview').html(marked($('#editor').val()))
  
  $('textarea').keyup(function () {
    $('#preview').html(marked($('#editor').val()), {renderer: new marked.Renderer()});
  });
}); 