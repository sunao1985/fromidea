import{_ as e,o as a,c as n,e as i}from"./app.bd4d065f.js";const t={},s=i('<h1 id="intelephense-\u63D2\u4EF6\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#intelephense-\u63D2\u4EF6\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> intelephense \u63D2\u4EF6\u914D\u7F6E\u8BF4\u660E</h1><h3 id="\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u5FEB\u6377\u952E\uFF1A</h3><p>\u683C\u5F0F\u5316\u4EE3\u7801\uFF1A Mac\uFF1A shift + option + f Windows\uFF1Ashift + alt + f</p><p>\u8DF3\u5230\u5230\u5BF9\u5E94\u51FD\u6570\u6216\u65B9\u6CD5\uFF1AMac\uFF1Acommand + \u9F20\u6807\u5DE6\u5065 Windows\uFF1Actrl + \u9F20\u6807\u5DE6\u952E</p><p>\u8FD4\u56DE\u5230\u8DF3\u8F6C\u4E4B\u524D\u7684\u4F4D\u7F6E\uFF1AMac\uFF1Acontrol + \u201C-\u201D Windows\uFF1Aalt + \u952E\u76D8\u4E0A\u7684\u2B05\uFE0F\u5065</p><h3 id="intelephense-\u203A-compatibility-correct-for-array-access-array-and-traversable-array-union-types" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-compatibility-correct-for-array-access-array-and-traversable-array-union-types" aria-hidden="true">#</a> Intelephense \u203A Compatibility: Correct For Array Access Array And Traversable Array Union Types</h3><p>Resolves &#39;ArrayAccess&quot; and &#39; Traversable&#39; implementations that are unioned with a typed array to generic syntax. eg</p><p>*ArravAccessOrTraversable|ElementType!l&#39;=&gt;&#39;ArravAccessOrTraversable&lt;mixed,ElementType&gt;</p><h3 id="\u517C\u5BB9\u6027-\u9002\u5408\u6570\u7EC4\u8BBF\u95EE\u6570\u7EC4\u548C\u53EF\u904D\u5386\u6570\u7EC4\u8054\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027-\u9002\u5408\u6570\u7EC4\u8BBF\u95EE\u6570\u7EC4\u548C\u53EF\u904D\u5386\u6570\u7EC4\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u517C\u5BB9\u6027:\u9002\u5408\u6570\u7EC4\u8BBF\u95EE\u6570\u7EC4\u548C\u53EF\u904D\u5386\u6570\u7EC4\u8054\u5408\u7C7B\u578B</h3><p>\u89E3\u6790\u4E0E\u7C7B\u578B\u5316\u6570\u7EC4\u8054\u5408\u7684\u201CArrayAccess\u201D\u548C\u201C\u53EF\u904D\u5386\u201D\u5B9E\u73B0\u5230\u6CDB\u578B\u8BED\u6CD5\u3002</p><p>*ArravAccessOrTraversable|\u5143\u7D20\u7C7B\u578B\uFF01 l&#39;=&gt;&#39;ArravAccessOr\u53EF\u8FFD\u6EAF&lt;\u6DF7\u5408,\u5143\u7D20\u7C7B\u578B&gt;</p><h3 id="intelephense-\u203A-compatibility-correct-for-base-class-static-union-types" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-compatibility-correct-for-base-class-static-union-types" aria-hidden="true">#</a> Intelephense \u203A Compatibility: Correct For Base Class Static Union Types</h3><p>Resolves &#39;BaseClass|static&#39; union types to &#39;static&#39; instead of &#39;BaseClass.</p><h3 id="\u517C\u5BB9\u6027-\u6B63\u786E\u7684\u57FA\u7C7B\u9759\u6001\u8054\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027-\u6B63\u786E\u7684\u57FA\u7C7B\u9759\u6001\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u517C\u5BB9\u6027:\u6B63\u786E\u7684\u57FA\u7C7B\u9759\u6001\u8054\u5408\u7C7B\u578B</h3><p>\u5C06\u201CBaseClass|static\u201D\u7C7B\u578B\u89E3\u6790\u4E3A\u201C\u9759\u6001\u201D\u800C\u4E0D\u662F\u201CBaseClass\u201D\u3002</p><h3 id="intelephense-\u203A-completion-fully-qualify-global-constants-and-functions" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-completion-fully-qualify-global-constants-and-functions" aria-hidden="true">#</a> Intelephense \u203A Completion: Fully Qualify Global Constants And Functions</h3><p>Global namespace constants and functions will be fully qualified (prefixed with a backslash)</p><h3 id="\u8865\u5168-\u5B8C\u5168\u9650\u5B9A\u5168\u5C40\u5E38\u91CF\u548C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u8865\u5168-\u5B8C\u5168\u9650\u5B9A\u5168\u5C40\u5E38\u91CF\u548C\u51FD\u6570" aria-hidden="true">#</a> \u8865\u5168:\u5B8C\u5168\u9650\u5B9A\u5168\u5C40\u5E38\u91CF\u548C\u51FD\u6570</h3><p>\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u5E38\u91CF\u548C\u51FD\u6570\u5C06\u662F\u5B8C\u5168\u9650\u5B9A\u7684(\u4EE5\u53CD\u659C\u6760\u4F5C\u4E3A\u524D\u7F00)</p><h3 id="intelephense-\xBB-completion-insert-use-declaration" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-completion-insert-use-declaration" aria-hidden="true">#</a> Intelephense \xBB Completion: Insert Use Declaration</h3><p>Use declarations will be automatically inserted for namespaced classes, traits, interfaces, functions, and constants.</p><h3 id="\u5B8C\u6210-\u63D2\u5165\u4F7F\u7528\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6210-\u63D2\u5165\u4F7F\u7528\u58F0\u660E" aria-hidden="true">#</a> \u5B8C\u6210:\u63D2\u5165\u4F7F\u7528\u58F0\u660E</h3><p>\u4F7F\u7528\u58F0\u660E\u5C06\u81EA\u52A8\u63D2\u5165\u547D\u540D\u7A7A\u95F4\u7C7B\u3001\u7279\u5F81\u3001\u63A5\u53E3\u3001\u51FD\u6570\u548C\u5E38\u91CF\u3002</p><h3 id="intelephense-\u203A-completion-max-items" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-completion-max-items" aria-hidden="true">#</a> Intelephense \u203A Completion: Max Items</h3><p>The maximum number of completion items returned per request.</p><p>100</p><h3 id="\u5B8C\u6210-\u6700\u591A\u7684\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6210-\u6700\u591A\u7684\u9879\u76EE" aria-hidden="true">#</a> \u5B8C\u6210:\u6700\u591A\u7684\u9879\u76EE</h3><p>\u6BCF\u4E2A\u8BF7\u6C42\u8FD4\u56DE\u7684\u6700\u5927\u5B8C\u6210\u9879\u6570\u3002</p><h3 id="intelephense-\u203A-completion-trigger-parameter-hints" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-completion-trigger-parameter-hints" aria-hidden="true">#</a> Intelephense \u203A Completion: Trigger Parameter Hints</h3><p>Method and function completions will include parentheses and trigger parameter hints.</p><h3 id="\u667A\u80FD\u8BED\u97F3\u8865\u5168-\u89E6\u53D1\u53C2\u6570\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u667A\u80FD\u8BED\u97F3\u8865\u5168-\u89E6\u53D1\u53C2\u6570\u63D0\u793A" aria-hidden="true">#</a> \u667A\u80FD\u8BED\u97F3\u8865\u5168:\u89E6\u53D1\u53C2\u6570\u63D0\u793A</h3><p>\u65B9\u6CD5\u548C\u51FD\u6570\u8865\u5168\u5C06\u5305\u62EC\u62EC\u53F7\u548C\u89E6\u53D1\u5668\u53C2\u6570\u63D0\u793A\u3002</p><h3 id="intelephense-\u203A-diagnostics-argument-count" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-argument-count" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Argument Count</h3><p>Enables argument count diagnostics.</p><h3 id="\u8BCA\u65AD-\u53C2\u6570\u8BA1\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u53C2\u6570\u8BA1\u6570" aria-hidden="true">#</a> \u8BCA\u65AD:\u53C2\u6570\u8BA1\u6570</h3><p>\u542F\u7528\u53C2\u6570\u8BA1\u6570\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-diagnostics-deprecated" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-deprecated" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Deprecated</h3><p>Enables deprecated diagnostics.</p><h3 id="\u8BCA\u65AD-\u5DF2\u5F03\u7528" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u5DF2\u5F03\u7528" aria-hidden="true">#</a> \u8BCA\u65AD:\u5DF2\u5F03\u7528</h3><p>\u4F7F\u5E9F\u5F03\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-diagnostics-duplicate-symbols" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-duplicate-symbols" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Duplicate Symbols</h3><p>Enables duplicate svmbol diagnostics.</p><h3 id="\u8BCA\u65AD-\u91CD\u590D\u7684\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u91CD\u590D\u7684\u7B26\u53F7" aria-hidden="true">#</a> \u8BCA\u65AD:\u91CD\u590D\u7684\u7B26\u53F7</h3><p>\u542F\u7528\u91CD\u590Dsvmbol\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-diagnostics-embedded-languages" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-embedded-languages" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Embedded Languages</h3><p>Enables diagnostics in embedded languages.</p><h3 id="\u8BCA\u65AD-\u5D4C\u5165\u5F0F\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u5D4C\u5165\u5F0F\u8BED\u8A00" aria-hidden="true">#</a> \u8BCA\u65AD:\u5D4C\u5165\u5F0F\u8BED\u8A00</h3><p>\u5728\u5D4C\u5165\u5F0F\u8BED\u8A00\u4E2D\u542F\u7528\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-diagnostics-enable" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-enable" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Enable</h3><p>Enables diagnostics.</p><h3 id="\u8BCA\u65AD-\u542F\u7528" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u542F\u7528" aria-hidden="true">#</a> \u8BCA\u65AD:\u542F\u7528</h3><p>\u652F\u6301\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-diagnostics-implementation-errors" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-implementation-errors" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Implementation Errors</h3><p>Enables reporting of problems associated with method and class implementations. For example, unimplemented methods or method</p><p>signature incompatibilities.</p><h3 id="\u8BCA\u65AD-\u5B9E\u73B0\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u5B9E\u73B0\u9519\u8BEF" aria-hidden="true">#</a> \u8BCA\u65AD:\u5B9E\u73B0\u9519\u8BEF</h3><p>\u542F\u7528\u4E0E\u65B9\u6CD5\u548C\u7C7B\u5B9E\u73B0\u76F8\u5173\u7684\u95EE\u9898\u62A5\u544A\u3002\u4F8B\u5982\uFF0C\u672A\u5B9E\u73B0\u7684\u65B9\u6CD5\u6216\u65B9\u6CD5</p><p>\u7B7E\u540D\u4E0D\u517C\u5BB9\u3002</p><h3 id="intelephense-\u203A-diagnostics-language-constraints" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-language-constraints" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Language Constraints</h3><p>Enables reporting of various language constraint errors.</p><h3 id="\u8BCA\u65AD-\u8BED\u8A00\u7684\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u8BED\u8A00\u7684\u7EA6\u675F" aria-hidden="true">#</a> \u8BCA\u65AD:\u8BED\u8A00\u7684\u7EA6\u675F</h3><p>\u542F\u7528\u62A5\u544A\u5404\u79CD\u8BED\u8A00\u7EA6\u675F\u9519\u8BEF\u3002</p><h3 id="intelephense-\u203A-diagnostics-run" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-run" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Run</h3><p>Controls when diagnostics are run.</p><p>onTvoe</p><h3 id="\u8BCA\u65AD-\u8DD1" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u8DD1" aria-hidden="true">#</a> \u8BCA\u65AD:\u8DD1</h3><p>\u8FD0\u884C\u8BCA\u65AD\u65F6\u7684\u63A7\u4EF6\u3002</p><h3 id="intelephense-\u203A-diagnostics-type-errors" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-type-errors" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Type Errors</h3><p>Enables diagnostics on type compatibility of arguments, property assignments, and return statements where types have been</p><p>declared.</p><h3 id="\u8BCA\u65AD-\u7C7B\u578B\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u7C7B\u578B\u9519\u8BEF" aria-hidden="true">#</a> \u8BCA\u65AD:\u7C7B\u578B\u9519\u8BEF</h3><p>\u542F\u7528\u4E86\u5BF9\u53C2\u6570\u3001\u5C5E\u6027\u8D4B\u503C\u548C\u8FD4\u56DE\u8BED\u53E5\u7684\u7C7B\u578B\u517C\u5BB9\u6027\u8FDB\u884C\u8BCA\u65AD</p><h3 id="intelephense-\u203A-diagnostics-undefined-class-constants" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-undefined-class-constants" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Undefined Class Constants</h3><p>Enables undefined class constant diagnostics.</p><h3 id="\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u7C7B\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u7C7B\u5E38\u91CF" aria-hidden="true">#</a> \u8BCA\u65AD:\u672A\u5B9A\u4E49\u7684\u7C7B\u5E38\u91CF</h3><p>\u542F\u7528\u672A\u5B9A\u4E49\u7C7B\u5E38\u91CF\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-diagnostics-undefined-constants" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-undefined-constants" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Undefined Constants</h3><p>Enables undefined constant diagnostics.</p><h3 id="\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u5E38\u91CF" aria-hidden="true">#</a> \u8BCA\u65AD:\u672A\u5B9A\u4E49\u7684\u5E38\u91CF</h3><p>\u542F\u7528\u672A\u5B9A\u4E49\u7684\u5E38\u91CF\u8BCA\u65AD\u3002</p><h3 id="intelephense-\xBB-diagnostics-undefined-functions" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-diagnostics-undefined-functions" aria-hidden="true">#</a> Intelephense \xBB Diagnostics: Undefined Functions</h3><p>Enables undefined function diagnostics.</p><h3 id="\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u51FD\u6570" aria-hidden="true">#</a> \u8BCA\u65AD:\u672A\u5B9A\u4E49\u7684\u51FD\u6570</h3><p>\u542F\u7528\u672A\u5B9A\u4E49\u7684\u529F\u80FD\u8BCA\u65AD\u3002</p><h3 id="intelephense-\xBB-diagnostics-undefined-methods" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-diagnostics-undefined-methods" aria-hidden="true">#</a> Intelephense \xBB Diagnostics: Undefined Methods</h3><p>Enables undefined method diagnostics.</p><h3 id="\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u8BCA\u65AD:\u672A\u5B9A\u4E49\u7684\u65B9\u6CD5</h3><p>\u542F\u7528\u672A\u5B9A\u4E49\u65B9\u6CD5\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-diagnostics-undefined-properties" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-undefined-properties" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Undefined Properties</h3><p>Enables undefined static property diagnostics.</p><h3 id="\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u8BCA\u65AD:\u672A\u5B9A\u4E49\u7684\u5C5E\u6027</h3><p>\u542F\u7528\u672A\u5B9A\u4E49\u7684\u9759\u6001\u5C5E\u6027\u8BCA\u65AD\u3002</p><h3 id="intelephense-\xBB-diagnostics-undefined-symbols" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-diagnostics-undefined-symbols" aria-hidden="true">#</a> Intelephense \xBB Diagnostics: Undefined Symbols</h3><p>DEPRECATED. Use the setting for each symbol category.</p><h3 id="\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u7B26\u53F7" aria-hidden="true">#</a> \u8BCA\u65AD:\u672A\u5B9A\u4E49\u7684\u7B26\u53F7</h3><p>\u5F03\u7528\u3002\u5BF9\u6BCF\u4E2A\u7B26\u53F7\u7C7B\u522B\u4F7F\u7528\u8BE5\u8BBE\u7F6E\u3002</p><h3 id="intelephense-\xBB-diagnostics-undefined-types" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-diagnostics-undefined-types" aria-hidden="true">#</a> Intelephense \xBB Diagnostics: Undefined Types</h3><p>Enables undefined class, interface and trait diagnostics</p><h3 id="\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u672A\u5B9A\u4E49\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u8BCA\u65AD:\u672A\u5B9A\u4E49\u7684\u7C7B\u578B</h3><p>\u542F\u7528\u672A\u5B9A\u4E49\u7684\u7C7B\u3001\u63A5\u53E3\u548C\u7279\u5F81\u8BCA\u65AD</p><p>Intelephense \u203A Diagnostics: Undefined Variables</p><p>Enables undefined variable diagnostics.</p><p>\u8BCA\u65AD:\u672A\u5B9A\u4E49\u7684\u53D8\u91CF</p><p>\u542F\u7528\u672A\u5B9A\u4E49\u7684\u53D8\u91CF\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-diagnostics-unexpected-tokens" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-diagnostics-unexpected-tokens" aria-hidden="true">#</a> Intelephense \u203A Diagnostics: Unexpected Tokens</h3><p>Enables unexpected token diagnostics.</p><h3 id="\u8BCA\u65AD-\u610F\u60F3\u4E0D\u5230\u7684\u4EE4\u724C" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u610F\u60F3\u4E0D\u5230\u7684\u4EE4\u724C" aria-hidden="true">#</a> \u8BCA\u65AD:\u610F\u60F3\u4E0D\u5230\u7684\u4EE4\u724C</h3><p>\u542F\u7528\u610F\u5916\u4EE4\u724C\u8BCA\u65AD\u3002</p><h3 id="intelephense-\xBB-diagnostics-unused-symbols" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-diagnostics-unused-symbols" aria-hidden="true">#</a> Intelephense \xBB Diagnostics: Unused Symbols</h3><p>Enables unused variable, private member, and import diagnostics.</p><h3 id="\u8BCA\u65AD-\u672A\u4F7F\u7528\u7684\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u8BCA\u65AD-\u672A\u4F7F\u7528\u7684\u7B26\u53F7" aria-hidden="true">#</a> \u8BCA\u65AD:\u672A\u4F7F\u7528\u7684\u7B26\u53F7</h3><p>\u542F\u7528\u672A\u4F7F\u7528\u7684\u53D8\u91CF\u3001\u79C1\u6709\u6210\u5458\u548C\u5BFC\u5165\u8BCA\u65AD\u3002</p><h3 id="intelephense-\u203A-environment-document-root" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-environment-document-root" aria-hidden="true">#</a> Intelephense \u203A Environment: Document Root</h3><p>The directory of the entry point to the application (directory of index.php). Can be absolute or relative to the workspace folder. Used for resolving script inclusion and path suggestions.</p><h3 id="\u73AF\u5883-\u6587\u6863\u6839" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883-\u6587\u6863\u6839" aria-hidden="true">#</a> \u73AF\u5883:\u6587\u6863\u6839</h3><p>\u5E94\u7528\u7A0B\u5E8F\u5165\u53E3\u70B9\u7684\u76EE\u5F55(index.php\u7684\u76EE\u5F55)\u3002\u53EF\u4EE5\u662F\u7EDD\u5BF9\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u76F8\u5BF9\u4E8E\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939\u7684\u3002\u7528\u4E8E\u89E3\u6790\u811A\u672C\u5305\u542B\u548C\u8DEF\u5F84\u5EFA\u8BAE\u3002</p><h3 id="intelephense-\xBB-environment-include-paths" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-environment-include-paths" aria-hidden="true">#</a> Intelephense \xBB Environment: Include Paths</h3><p>The include paths (as individual path items) as defined in the include_path ini setting or paths to external libraries. Can be absolute or relative to the workspace folder. Used for resolving script inclusion and/or adding external symbols to folder.</p><h3 id="\u73AF\u5883-\u5305\u62EC\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883-\u5305\u62EC\u8DEF\u5F84" aria-hidden="true">#</a> \u73AF\u5883:\u5305\u62EC\u8DEF\u5F84</h3><p>\u5728include_path ini\u8BBE\u7F6E\u4E2D\u5B9A\u4E49\u7684\u5305\u542B\u8DEF\u5F84(\u4F5C\u4E3A\u5355\u72EC\u7684\u8DEF\u5F84\u9879)\u6216\u5916\u90E8\u5E93\u7684\u8DEF\u5F84\u3002\u53EF\u4EE5\u662F\u7EDD\u5BF9\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u76F8\u5BF9\u4E8E\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939\u7684\u3002\u7528\u4E8E\u89E3\u6790\u811A\u672C\u5305\u542B\u548C/\u6216\u5411\u6587\u4EF6\u5939\u6DFB\u52A0\u5916\u90E8\u7B26\u53F7\u3002</p><h3 id="intelephense-\u203A-environment-ph-version" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-environment-ph-version" aria-hidden="true">#</a> Intelephense \u203A Environment: PH Version</h3><p>A sever compatible string that represents the target PHP version. Used for providing version appropriate suggestions and diagnostics</p><p>PHP 5.3.0 and greater supported.</p><h3 id="\u73AF\u5883-php\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883-php\u7248\u672C" aria-hidden="true">#</a> \u73AF\u5883:PHP\u7248\u672C</h3><p>\u8868\u793A\u76EE\u6807PHP\u7248\u672C\u7684\u670D\u52A1\u5668\u517C\u5BB9\u5B57\u7B26\u4E32\u3002\u7528\u4E8E\u63D0\u4F9B\u7248\u672C\u76F8\u5173\u7684\u5EFA\u8BAE\u548C\u8BCA\u65AD</p><h3 id="intelephense-environment-short-open-tag" tabindex="-1"><a class="header-anchor" href="#intelephense-environment-short-open-tag" aria-hidden="true">#</a> Intelephense &gt; Environment: Short Open Tag</h3><p>When enabled &#39;&lt;?&#39; will be parsed as a PHP open tag. Defaults to true.</p><h3 id="\u73AF\u5883-\u77ED\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883-\u77ED\u6807\u7B7E" aria-hidden="true">#</a> \u73AF\u5883:\u77ED\u6807\u7B7E</h3><p>\u5F53\u542F\u7528&#39; &lt; ?`\u5C06\u88AB\u89E3\u6790\u4E3APHP\u6253\u5F00\u6807\u7B7E\u3002\u9ED8\u8BA4\u503C\u4E3Atrue\u3002</p><h3 id="intelephense-\xBB-files-associations" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-files-associations" aria-hidden="true">#</a> Intelephense \xBB Files: Associations</h3><p>Configure glob patterns to make files available for language server features. Inherits from files.associations.</p><p># settings.ison +4#</p><h3 id="\u6587\u4EF6-\u7EC4\u7EC7" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-\u7EC4\u7EC7" aria-hidden="true">#</a> \u6587\u4EF6:\u7EC4\u7EC7</h3><p>\u914D\u7F6Eglob\u6A21\u5F0F\uFF0C\u4F7F\u6587\u4EF6\u53EF\u7528\u4E8E\u8BED\u8A00\u670D\u52A1\u5668\u529F\u80FD\u3002\u4ECEfiles.associations\u7EE7\u627F\u3002</p><h3 id="intelephense-\xBB-files-exclude" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-files-exclude" aria-hidden="true">#</a> Intelephense \xBB Files: Exclude</h3><p>Configure glob patterns to exclude certain files and folders from all language server features. Inherits from files.exclude.</p><h3 id="\u6587\u4EF6-\u6392\u9664" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-\u6392\u9664" aria-hidden="true">#</a> \u6587\u4EF6:\u6392\u9664</h3><p>\u914D\u7F6Eglob\u6A21\u5F0F\u4EE5\u4ECE\u6240\u6709\u8BED\u8A00\u670D\u52A1\u5668\u7279\u6027\u4E2D\u6392\u9664\u67D0\u4E9B\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u3002\u4ECEfiles.exclude\u7EE7\u627F\u3002</p><h3 id="intelephense-\u203A-files-max-size" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-files-max-size" aria-hidden="true">#</a> Intelephense \u203A Files: Max Size</h3><p>Maximum file size in bytes.</p><h3 id="\u6587\u4EF6-\u5927\u6587\u4EF6\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-\u5927\u6587\u4EF6\u5927\u5C0F" aria-hidden="true">#</a> \u6587\u4EF6:\u5927\u6587\u4EF6\u5927\u5C0F</h3><p>\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u7684\u6700\u5927\u6587\u4EF6\u5927\u5C0F\u3002</p><h3 id="intelephense-\u203A-format-braces" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-format-braces" aria-hidden="true">#</a> Intelephense \u203A Format: Braces</h3><p>Controls formatting style of braces</p><p>\u9ED8\u8BA4\uFF1Apsr12</p><h3 id="\u683C\u5F0F-\u5927\u62EC\u53F7" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F-\u5927\u62EC\u53F7" aria-hidden="true">#</a> \u683C\u5F0F:\u5927\u62EC\u53F7</h3><p>\u63A7\u5236\u5927\u62EC\u53F7\u7684\u683C\u5F0F\u5316\u6837\u5F0F</p><p>\u6539\u4E3A\uFF1Ak&amp;r</p><h3 id="intelephense-\u203A-format-enable" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-format-enable" aria-hidden="true">#</a> Intelephense \u203A Format: Enable</h3><p>Enables formatting.</p><h3 id="\u683C\u5F0F-\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F-\u652F\u6301" aria-hidden="true">#</a> \u683C\u5F0F:\u652F\u6301</h3><p>\u652F\u6301\u683C\u5F0F\u3002</p><h3 id="intelephense-licence-kev" tabindex="-1"><a class="header-anchor" href="#intelephense-licence-kev" aria-hidden="true">#</a> Intelephense: Licence Kev</h3><p>DEPRECATED. Don&#39;t use this. Go to command palette and search for enter licence key.</p><h3 id="\u8BB8\u53EF\u8BC1\u53F7" tabindex="-1"><a class="header-anchor" href="#\u8BB8\u53EF\u8BC1\u53F7" aria-hidden="true">#</a> \u8BB8\u53EF\u8BC1\u53F7</h3><p>\u5F03\u7528\u3002\u4E0D\u8981\u7528\u8FD9\u4E2A\u3002\u8FDB\u5165\u547D\u4EE4\u8C03\u8272\u677F\u5E76\u641C\u7D22\u8F93\u5165\u8BB8\u53EF\u8BC1\u5BC6\u94A5\u3002</p><h3 id="intelephense-max-memory" tabindex="-1"><a class="header-anchor" href="#intelephense-max-memory" aria-hidden="true">#</a> Intelephense: Max Memory</h3><p>Maximum memory (in MB) that the server should use. On some systems this may only have effect when runtime has been set. Minimum</p><h3 id="\u6700\u5927\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u6700\u5927\u5185\u5B58" aria-hidden="true">#</a> \u6700\u5927\u5185\u5B58</h3><p>\u670D\u52A1\u5668\u5E94\u8BE5\u4F7F\u7528\u7684\u6700\u5927\u5185\u5B58(MB)\u3002\u5728\u67D0\u4E9B\u7CFB\u7EDF\u4E0A\uFF0C\u53EA\u6709\u8BBE\u7F6E\u4E86runtime\u65F6\u624D\u4F1A\u751F\u6548\u3002\u6700\u4F4E</p><h3 id="intelephense-\u203A-phpdoc-class-template" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-phpdoc-class-template" aria-hidden="true">#</a> Intelephense \u203A Phpdoc: Class Template</h3><p>An object that describes the format of generated class/interface/trait phpdoc. The following snippet variables are available</p><p>SYMBOL_NAME; SYMBOL_KIND; SYMBOL_TYPE; SYMBOL_NAMESPACE.</p><h3 id="phpdoc-\u7C7B\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#phpdoc-\u7C7B\u6A21\u677F" aria-hidden="true">#</a> Phpdoc:\u7C7B\u6A21\u677F</h3><p>\u4E00\u4E2A\u63CF\u8FF0\u751F\u6210\u7684\u7C7B/\u63A5\u53E3/\u7279\u5F81phpdoc\u683C\u5F0F\u7684\u5BF9\u8C61\u3002\u4E0B\u5217\u4EE3\u7801\u7247\u6BB5\u53D8\u91CF\u662F\u53EF\u7528\u7684</p><h3 id="intelephense-\u203A-phodoc-function-template" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-phodoc-function-template" aria-hidden="true">#</a> Intelephense \u203A Phodoc: Function Template</h3><p>An object that describes the format of generated function/method phpdoc. The following snippet variables are available: SYMBOL_NAME;SYMBOL_KIND; SYMBOL_TYPE; SYMBOL_NAMESPACE.</p><h3 id="phodoc-\u51FD\u6570\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#phodoc-\u51FD\u6570\u6A21\u677F" aria-hidden="true">#</a> Phodoc:\u51FD\u6570\u6A21\u677F</h3><p>\u4E00\u4E2A\u63CF\u8FF0\u751F\u6210\u51FD\u6570/\u65B9\u6CD5phpdoc\u683C\u5F0F\u7684\u5BF9\u8C61\u3002\u4E0B\u5217\u4EE3\u7801\u7247\u6BB5\u53D8\u91CF\u53EF\u7528:</p><h3 id="intelephense-\xBB-phpdoc-property-template" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-phpdoc-property-template" aria-hidden="true">#</a> Intelephense \xBB Phpdoc: Property Template</h3><p>An object that describes the format of generated property phpdoc. The following snippet variables are available: SYMBOL_NAME:SYMBOL KIND: SYMBOL TYPE: SYMBOL NAMESPACE.</p><h3 id="phpdoc-\u5C5E\u6027\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#phpdoc-\u5C5E\u6027\u6A21\u677F" aria-hidden="true">#</a> Phpdoc:\u5C5E\u6027\u6A21\u677F</h3><p>\u4E00\u4E2A\u63CF\u8FF0\u751F\u6210\u5C5E\u6027phpdoc\u683C\u5F0F\u7684\u5BF9\u8C61\u3002\u4E0B\u5217\u4EE3\u7801\u7247\u6BB5\u53D8\u91CF\u53EF\u7528:SYMBOL_NAME:\u7B26\u53F7\u7C7B\u578B:\u7B26\u53F7\u547D\u540D\u7A7A\u95F4\u3002</p><h3 id="intelephense-\xBB-phpdoc-return-void" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-phpdoc-return-void" aria-hidden="true">#</a> Intelephense \xBB Phpdoc: Return Void</h3><p>Adds &#39;@return void&#39; to auto generated phodoc for definitions that do not return a value</p><h3 id="phpdoc-\u8FD4\u56DE\u7A7A" tabindex="-1"><a class="header-anchor" href="#phpdoc-\u8FD4\u56DE\u7A7A" aria-hidden="true">#</a> Phpdoc:\u8FD4\u56DE\u7A7A</h3><p>\u4E3A\u81EA\u52A8\u751F\u6210\u7684phodoc\u6DFB\u52A0<code>@return void</code>\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E0D\u8FD4\u56DE\u503C</p><p>Intelephense \u203A Phpdoc: Text Format</p><p>snippet</p><p>Phpdoc:\u6587\u672C\u683C\u5F0F</p><h3 id="intelephense-\xBB-phpdoc-use-fully-qualified-names" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-phpdoc-use-fully-qualified-names" aria-hidden="true">#</a> Intelephense \xBB Phpdoc: Use Fully Qualified Names</h3><p>Fully qualified names will be used for types when true. When false short type names will be used and imported where appropriate Overrides intelephense.completion.insertUseDeclaration.</p><h3 id="phpdoc-\u4F7F\u7528\u5B8C\u5168\u9650\u5B9A\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#phpdoc-\u4F7F\u7528\u5B8C\u5168\u9650\u5B9A\u540D\u79F0" aria-hidden="true">#</a> Phpdoc:\u4F7F\u7528\u5B8C\u5168\u9650\u5B9A\u540D\u79F0</h3><p>\u5F53\u7C7B\u578B\u4E3Atrue\u65F6\uFF0C\u5C06\u4F7F\u7528\u5168\u9650\u5B9A\u540D\u79F0\u3002\u5F53\u4E3Afalse\u65F6\uFF0C\u77ED\u7C7B\u578B\u540D\u79F0\u5C06\u88AB\u4F7F\u7528\uFF0C\u5E76\u5728\u9002\u5F53\u7684\u5730\u65B9\u88AB\u5BFC\u5165intelephense.completion.insertUseDeclaration\u3002</p><h3 id="intelephense-\u203A-references-exclude" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-references-exclude" aria-hidden="true">#</a> Intelephense \u203A References: Exclude</h3><p>Glob patterns matching files and folders that should be excluded from references search.</p><p><strong>/vendor/</strong></p><h3 id="\u5F15\u7528-\u6392\u9664" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528-\u6392\u9664" aria-hidden="true">#</a> \u5F15\u7528:\u6392\u9664</h3><p>\u5339\u914D\u5E94\u8BE5\u6392\u9664\u5728\u5F15\u7528\u641C\u7D22\u4E4B\u5916\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u7684\u901A\u914D\u6A21\u5F0F\u3002</p><h3 id="intelephense-\u203A-rename-exclude" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-rename-exclude" aria-hidden="true">#</a> Intelephense \u203A Rename: Exclude</h3><p>Glob patterns matching files and folders that should be excluded when renaming symbols. Rename operation will fail if the symbol definition is found in the excluded files/folders</p><h3 id="\u91CD\u547D\u540D-\u6392\u9664" tabindex="-1"><a class="header-anchor" href="#\u91CD\u547D\u540D-\u6392\u9664" aria-hidden="true">#</a> \u91CD\u547D\u540D:\u6392\u9664</h3><p>\u5728\u91CD\u547D\u540D\u7B26\u53F7\u65F6\uFF0C\u5339\u914D\u5E94\u88AB\u6392\u9664\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u7684\u901A\u914D\u6A21\u5F0F\u3002\u5982\u679C\u5728\u6392\u9664\u7684\u6587\u4EF6/\u6587\u4EF6\u5939\u4E2D\u627E\u5230\u7B26\u53F7\u5B9A\u4E49\uFF0C\u5219\u91CD\u547D\u540D\u64CD\u4F5C\u5C06\u5931\u8D25</p><h3 id="intelephense-\xBB-rename-namespace-mode" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-rename-namespace-mode" aria-hidden="true">#</a> Intelephense \xBB Rename: Namespace Mode</h3><p>Controls the scope of a namespace rename operation.</p><p>single</p><h3 id="\u91CD\u547D\u540D-\u540D\u79F0\u7A7A\u95F4\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u91CD\u547D\u540D-\u540D\u79F0\u7A7A\u95F4\u6A21\u5F0F" aria-hidden="true">#</a> \u91CD\u547D\u540D:\u540D\u79F0\u7A7A\u95F4\u6A21\u5F0F</h3><p>\u63A7\u5236\u547D\u540D\u7A7A\u95F4\u91CD\u547D\u540D\u64CD\u4F5C\u7684\u8303\u56F4\u3002</p><h3 id="intelephense-runtime-\u672A\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#intelephense-runtime-\u672A\u540C\u6B65" aria-hidden="true">#</a> Intelephense: Runtime\uFF08\u672A\u540C\u6B65\uFF09</h3><p>Path to a Node.js executable. Use this if you wish to use a different version of Node.js. Defaults to Node.js shipped with VSCode.</p><h3 id="\u6267\u884C\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u65F6\u95F4" aria-hidden="true">#</a> \u6267\u884C\u65F6\u95F4</h3><p>\u6307\u5411Node.js\u53EF\u6267\u884C\u6587\u4EF6\u7684\u8DEF\u5F84\u3002\u5982\u679C\u4F60\u60F3\u4F7F\u7528\u4E0D\u540C\u7248\u672C\u7684Node.js\uFF0C\u8BF7\u4F7F\u7528\u5B83\u3002\u9ED8\u8BA4\u662FVSCode\u9644\u5E26\u7684Node.js\u3002</p><h3 id="intelephense-stubs" tabindex="-1"><a class="header-anchor" href="#intelephense-stubs" aria-hidden="true">#</a> Intelephense: Stubs</h3><p>Configure stub files for built in symbols and common extensions. The default setting includes PHP core and all bundled extensions.</p><h3 id="\u5B58\u6839" tabindex="-1"><a class="header-anchor" href="#\u5B58\u6839" aria-hidden="true">#</a> \u5B58\u6839</h3><p>\u4E3A\u5185\u7F6E\u7B26\u53F7\u548C\u901A\u7528\u6269\u5C55\u914D\u7F6E\u5B58\u6839\u6587\u4EF6\u3002\u9ED8\u8BA4\u8BBE\u7F6E\u5305\u62ECPHP core\u548C\u6240\u6709\u6346\u7ED1\u7684\u6269\u5C55\u3002</p><h3 id="intelephense-\u203A-telemetry-enabled" tabindex="-1"><a class="header-anchor" href="#intelephense-\u203A-telemetry-enabled" aria-hidden="true">#</a> Intelephense \u203A Telemetry: Enabled</h3><p>Anonymous usage and crash data will be sent to Azure Application Insights. Inherits from telemetry.enableTelemetry.</p><h3 id="\u9065\u6D4B-\u542F\u7528" tabindex="-1"><a class="header-anchor" href="#\u9065\u6D4B-\u542F\u7528" aria-hidden="true">#</a> \u9065\u6D4B:\u542F\u7528</h3><p>\u533F\u540D\u4F7F\u7528\u548C\u5D29\u6E83\u6570\u636E\u5C06\u88AB\u53D1\u9001\u5230Azure Application Insights\u3002\u4ECEtelemetry.enableTelemetry\u7EE7\u627F\u3002</p><h3 id="intelephense-\xBB-trace-server" tabindex="-1"><a class="header-anchor" href="#intelephense-\xBB-trace-server" aria-hidden="true">#</a> Intelephense \xBB Trace: Server</h3><p>Traces the communication between VSCode and the intelephense language server.</p><h3 id="\u8DDF\u8E2A-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u8DDF\u8E2A-\u670D\u52A1\u5668" aria-hidden="true">#</a> \u8DDF\u8E2A:\u670D\u52A1\u5668</h3><p>\u8DDF\u8E2AVSCode\u548Cintelephense\u8BED\u8A00\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u901A\u4FE1\u3002</p><h3 id="vsintellicode-\u203A-features-api-examples" tabindex="-1"><a class="header-anchor" href="#vsintellicode-\u203A-features-api-examples" aria-hidden="true">#</a> Vsintellicode \u203A Features: Api Examples</h3><p>Promotes IntelliCode API Usage Examples extension to vscode intellicode python users.</p><h3 id="\u7279\u70B9-api\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9-api\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7279\u70B9:Api\u7684\u4F8B\u5B50</h3><p>\u5C06IntelliCode API\u4F7F\u7528\u793A\u4F8B\u6269\u5C55\u5230vscode IntelliCode python\u7528\u6237\u3002</p><h3 id="vsintellicode-\u203A-features-api-examplests" tabindex="-1"><a class="header-anchor" href="#vsintellicode-\u203A-features-api-examplests" aria-hidden="true">#</a> Vsintellicode \u203A Features: Api Examplests</h3><p>Promotes IntelliCode API Usage Examples extension to vscode intellicode typescript/iavascript users.</p><h3 id="\u7279\u70B9-api-examplests" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9-api-examplests" aria-hidden="true">#</a> \u7279\u70B9:Api Examplests</h3><p>\u63D0\u5347\u4E86vscode IntelliCode API\u4F7F\u7528\u793A\u4F8B\u6269\u5C55\u5230typescript/iavascript\u7528\u6237\u3002</p><h3 id="vsintellicode-\u203A-features-\u203A-python-deep-learning" tabindex="-1"><a class="header-anchor" href="#vsintellicode-\u203A-features-\u203A-python-deep-learning" aria-hidden="true">#</a> Vsintellicode \u203A Features \u203A Python: Deep Learning</h3><h3 id="\u7279\u6027python-\u6DF1\u5EA6\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027python-\u6DF1\u5EA6\u5B66\u4E60" aria-hidden="true">#</a> \u7279\u6027Python:\u6DF1\u5EA6\u5B66\u4E60</h3><h3 id="vsintellicode-\xBB-java-completions-enabled" tabindex="-1"><a class="header-anchor" href="#vsintellicode-\xBB-java-completions-enabled" aria-hidden="true">#</a> Vsintellicode \xBB Java: Completions Enabled</h3><p>Enable Visual Studio IntelliCode completions for Java</p><h3 id="java-\u542F\u7528" tabindex="-1"><a class="header-anchor" href="#java-\u542F\u7528" aria-hidden="true">#</a> Java:\u542F\u7528</h3><p>\u4E3AJava\u542F\u7528Visual Studio IntelliCode completion</p><h3 id="vsintellicode-model-download-path" tabindex="-1"><a class="header-anchor" href="#vsintellicode-model-download-path" aria-hidden="true">#</a> Vsintellicode: Model Download Path</h3><p>Specifies the folder path where downloaded model files are stored. Defaults to the extension install directory if not specified.</p><h3 id="\u6A21\u578B\u4E0B\u8F7D\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u4E0B\u8F7D\u8DEF\u5F84" aria-hidden="true">#</a> \u6A21\u578B\u4E0B\u8F7D\u8DEF\u5F84</h3><p>\u6307\u5B9A\u5B58\u50A8\u4E0B\u8F7D\u6A21\u578B\u6587\u4EF6\u7684\u6587\u4EF6\u5939\u8DEF\u5F84\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4E3A\u6269\u5C55\u5B89\u88C5\u76EE\u5F55\u3002</p><h3 id="vsintellicode-\xBB-modify-\u203A-editor-suggest-selection" tabindex="-1"><a class="header-anchor" href="#vsintellicode-\xBB-modify-\u203A-editor-suggest-selection" aria-hidden="true">#</a> Vsintellicode \xBB Modify \u203A Editor: Suggest Selection</h3><p>Control whether Visual Studio IntelliCode will modify editor. suggestSelection if it is set to a value (recentlyUsed) that will result in IntelliCode suggested completion items not being visible.</p><h3 id="\u4FEE\u6539\u7F16\u8F91\u5668-\u5EFA\u8BAE\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7F16\u8F91\u5668-\u5EFA\u8BAE\u9009\u62E9" aria-hidden="true">#</a> \u4FEE\u6539\u7F16\u8F91\u5668:\u5EFA\u8BAE\u9009\u62E9</h3><p>\u63A7\u5236visualstudio IntelliCode\u662F\u5426\u4FEE\u6539\u7F16\u8F91\u5668\u3002\u5EFA\u8BAE\u9009\u62E9\u5982\u679C\u5B83\u88AB\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u503C(recentlyUsed)\uFF0C\u8FD9\u4E2A\u503C\u4F1A\u5BFC\u81F4IntelliCode\u5EFA\u8BAE\u7684\u5B8C\u6210\u9879\u4E0D\u53EF\u89C1</p><h3 id="vsintellicode-\u203A-python-completions-enabled" tabindex="-1"><a class="header-anchor" href="#vsintellicode-\u203A-python-completions-enabled" aria-hidden="true">#</a> Vsintellicode \u203A Python: Completions Enabled</h3><p>Enable Visual Studio IntelliCode completions for Python</p><h3 id="python-\u542F\u7528" tabindex="-1"><a class="header-anchor" href="#python-\u542F\u7528" aria-hidden="true">#</a> Python:\u542F\u7528</h3><p>\u4E3APython\u542F\u7528Visual Studio IntelliCode\u8865\u5168\u529F\u80FD</p><h3 id="vsintellicode-\xBB-sql-completions-enabled" tabindex="-1"><a class="header-anchor" href="#vsintellicode-\xBB-sql-completions-enabled" aria-hidden="true">#</a> Vsintellicode \xBB Sql: Completions Enabled</h3><h3 id="\u542F\u7528sql-\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528sql-\u5B8C\u6210" aria-hidden="true">#</a> \u542F\u7528Sql:\u5B8C\u6210</h3><h3 id="vsintellicode-\u203A-typescript-completions-enabled" tabindex="-1"><a class="header-anchor" href="#vsintellicode-\u203A-typescript-completions-enabled" aria-hidden="true">#</a> Vsintellicode \u203A TypeScript: Completions Enabled</h3><p>Enable Visual Studio IntelliCode completions for TypeScript and JavaScript</p><h3 id="typescript-\u542F\u7528" tabindex="-1"><a class="header-anchor" href="#typescript-\u542F\u7528" aria-hidden="true">#</a> TypeScript:\u542F\u7528</h3><p>\u4E3ATypeScript\u548CJavaScript\u542F\u7528Visual Studio IntelliCode\u8865\u5168\u529F\u80FD</p>',246),r=[s];function d(h,o){return a(),n("div",null,r)}const p=e(t,[["render",d],["__file","intelephense\u63D2\u4EF6\u914D\u7F6E\u8BF4\u660E.html.vue"]]);export{p as default};
