!function(){var t=CodeMirror.getMode({tabSize:4},"stex");function e(e){test.mode(e,t,Array.prototype.slice.call(arguments,1))}e("word","foo"),e("twoWords","foo bar"),e("beginEndDocument","[tag \\begin][bracket {][atom document][bracket }]","[tag \\end][bracket {][atom document][bracket }]"),e("beginEndEquation","[tag \\begin][bracket {][atom equation][bracket }]","  E=mc^2","[tag \\end][bracket {][atom equation][bracket }]"),e("beginModule","[tag \\begin][bracket {][atom module][bracket }[[]]]"),e("beginModuleId","[tag \\begin][bracket {][atom module][bracket }[[]id=bbt-size[bracket ]]]"),e("importModule","[tag \\importmodule][bracket [[][string b-b-t][bracket ]]{][builtin b-b-t][bracket }]"),e("importModulePath","[tag \\importmodule][bracket [[][tag \\KWARCslides][bracket {][string dmath/en/cardinality][bracket }]]{][builtin card][bracket }]"),e("psForPDF","[tag \\PSforPDF][bracket [[][atom 1][bracket ]]{]#1[bracket }]"),e("comment","[comment % foo]"),e("tagComment","[tag \\item][comment % bar]"),e("commentTag"," [comment % \\item]"),e("commentLineBreak","[comment %]","foo"),e("tagErrorCurly","[tag \\begin][error }][bracket {]"),e("tagErrorSquare","[tag \\item][error ]]][bracket {]"),e("commentCurly","[comment % }]"),e("tagHash","the [tag \\#] key"),e("tagNumber","a [tag \\$][atom 5] stetson"),e("tagPercent","[atom 100][tag \\%] beef"),e("tagAmpersand","L [tag \\&] N"),e("tagUnderscore","foo[tag \\_]bar"),e("tagBracketOpen","[tag \\emph][bracket {][tag \\{][bracket }]"),e("tagBracketClose","[tag \\emph][bracket {][tag \\}][bracket }]"),e("tagLetterNumber","section [tag \\S][atom 1]"),e("textTagNumber","para [tag \\P][atom 2]"),e("thinspace","x[tag \\,]y"),e("thickspace","x[tag \\;]y"),e("negativeThinspace","x[tag \\!]y"),e("periodNotSentence","J.\\ L.\\ is"),e("periodSentence","X[tag \\@]. The"),e("italicCorrection","[bracket {][tag \\em] If[tag \\/][bracket }] I"),e("tagBracket","[tag \\newcommand][bracket {][tag \\pop][bracket }]"),e("inlineMathTagFollowedByNumber","[keyword $][tag \\pi][number 2][keyword $]"),e("inlineMath","[keyword $][number 3][variable-2 x][tag ^][number 2.45]-[tag \\sqrt][bracket {][tag \\$\\alpha][bracket }] = [number 2][keyword $] other text"),e("inlineMathLatexStyle","[keyword \\(][number 3][variable-2 x][tag ^][number 2.45]-[tag \\sqrt][bracket {][tag \\$\\alpha][bracket }] = [number 2][keyword \\)] other text"),e("displayMath","More [keyword $$]\t[variable-2 S][tag ^][variable-2 n][tag \\sum] [variable-2 i][keyword $$] other text"),e("displayMath environment","[tag \\begin][bracket {][atom equation][bracket }] x [tag \\end][bracket {][atom equation][bracket }] other text"),e("displayMath environment with label","[tag \\begin][bracket {][atom equation][bracket }][tag \\label][bracket {][atom eq1][bracket }] x [tag \\end][bracket {][atom equation][bracket }] other text~[tag \\ref][bracket {][atom eq1][bracket }]"),e("mathWithComment","[keyword $][variable-2 x] [comment % $]","[variable-2 y][keyword $] other text"),e("lineBreakArgument","[tag \\\\][bracket [[][atom 1cm][bracket ]]]")}();