!function(){var t=CodeMirror.getMode({indentUnit:2},"jsx");function a(a){test.mode(a,t,Array.prototype.slice.call(arguments,1))}a("selfclose","[keyword var] [def x] [operator =] [bracket&tag <] [tag foo] [bracket&tag />] [operator +] [number 1];"),a("openclose","([bracket&tag <][tag foo][bracket&tag >]hello [atom &amp;][bracket&tag </][tag foo][bracket&tag >][operator ++])"),a("openclosefragment","([bracket&tag <><][tag foo][bracket&tag >]hello [atom &amp;][bracket&tag </][tag foo][bracket&tag ></>][operator ++])"),a("attr","([bracket&tag <][tag foo] [attribute abc]=[string 'value'][bracket&tag >]hello [atom &amp;][bracket&tag </][tag foo][bracket&tag >][operator ++])"),a("braced_attr","([bracket&tag <][tag foo] [attribute abc]={[number 10]}[bracket&tag >]hello [atom &amp;][bracket&tag </][tag foo][bracket&tag >][operator ++])"),a("braced_text","([bracket&tag <][tag foo][bracket&tag >]hello {[number 10]} [atom &amp;][bracket&tag </][tag foo][bracket&tag >][operator ++])"),a("nested_tag","([bracket&tag <][tag foo][bracket&tag ><][tag bar][bracket&tag ></][tag bar][bracket&tag ></][tag foo][bracket&tag >][operator ++])"),a("nested_jsx","[keyword return] (","  [bracket&tag <][tag foo][bracket&tag >]","    say {[number 1] [operator +] [bracket&tag <][tag bar] [attribute attr]={[number 10]}[bracket&tag />]}!","  [bracket&tag </][tag foo][bracket&tag >][operator ++]",")"),a("preserve_js_context","[variable x] [operator =] [string-2 `quasi${][bracket&tag <][tag foo][bracket&tag />][string-2 }quoted`]"),a("string_interpolation","[variable x] [operator =] [string-2 `quasi<code>${] [number 10] [string-2 }</code>`]"),a("line_comment","([bracket&tag <][tag foo] [comment // hello]","   [bracket&tag ></][tag foo][bracket&tag >][operator ++])"),a("line_comment_not_in_tag","([bracket&tag <][tag foo][bracket&tag >] // hello","  [bracket&tag </][tag foo][bracket&tag >][operator ++])"),a("block_comment","([bracket&tag <][tag foo] [comment /* hello]","[comment    line 2]","[comment    line 3 */] [bracket&tag ></][tag foo][bracket&tag >][operator ++])"),a("block_comment_not_in_tag","([bracket&tag <][tag foo][bracket&tag >]/* hello","    line 2","    line 3 */ [bracket&tag </][tag foo][bracket&tag >][operator ++])"),a("missing_attr","([bracket&tag <][tag foo] [attribute selected][bracket&tag />][operator ++])"),a("indent_js","([bracket&tag <][tag foo][bracket&tag >]","    [bracket&tag <][tag bar] [attribute baz]={[keyword function]() {","        [keyword return] [number 10]","      }}[bracket&tag />]","  [bracket&tag </][tag foo][bracket&tag >])"),a("spread","([bracket&tag <][tag foo] [attribute bar]={[meta ...][variable baz] [operator /][number 2]}[bracket&tag />])"),a("tag_attribute","([bracket&tag <][tag foo] [attribute bar]=[bracket&tag <][tag foo][bracket&tag />/>][operator ++])"),a("in_array","[[","  [bracket&tag <][tag Something][bracket&tag />],","  [string-2 `${][variable x][string-2 }`],","  [variable y]","]]");var e=CodeMirror.getMode({indentUnit:2},"text/typescript-jsx");!function(t){test.mode(t,e,Array.prototype.slice.call(arguments,1))}("tsx_react_integration","[keyword interface] [def Props] {","  [property foo]: [type string];","}","[keyword class] [def MyComponent] [keyword extends] [type React].[type Component] [operator <] [type Props], [type any] [operator >] {","  [property render]() {","    [keyword return] [bracket&tag <][tag span][bracket&tag >]{[keyword this].[property props].[property foo]}[bracket&tag </][tag span][bracket&tag >]","  }","}",'[bracket&tag <][tag MyComponent] [attribute foo]=[string "bar"] [bracket&tag />]; [comment //ok]',"[bracket&tag <][tag MyComponent] [attribute foo]={[number 0]} [bracket&tag />]; [comment //error]")}();