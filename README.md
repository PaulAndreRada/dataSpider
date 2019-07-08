Control basic jQuery methods without touching javascript

By adding simple data tags you can control jQuery methods to trigger on any element using css style accessors.

Toggle elements through id 
```
<a href=“#” data-spider-onClick-toggle=“#list” > 
   toggleList
</a>

<ol id=“list”> 
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>

```

Combine methods to create complex effects 
```
<a href=“#” data-spider-onMouseOver-fadeIn=“.list”
   	    data-spider-fadeIn-prop-speed="slow" 

   	    data-spider-onMouseOut-fadeOut=“.list”
	    data-spider-fadeOut-prop-speed="200"> 
   show list
</a>

<ol class=“list”> 
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>

<ul class="other list">
    </li>item</li>
    </li>item</li>
    </li>item</li>
</ul>

```
