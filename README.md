Control basic jQuery methods without touching javascript

By adding simple data tags you can control jQuery methods to trigger on any element using css style accessors.

Toggle elements through id 
```
<a href=“#” data-spider-onClick-toggle=“#myList” > 
   toggleList
</a>

<ol id=“myList”> 
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>

```

Combine methods to create complex effects 
```
<a href=“#” data-spider-onMouseOver-fadeIn=“.myList”
   	    data-spider-fadeIn-prop-speed="slow" 

   	    data-spider-onMouseOut-fadeOut=“.myOtherList”
	    data-spider-fadeOut-prop-speed="200"> 
   show list
</a>

<ol class=“myList”> 
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>

<ul class="myOtherlist">
    </li>item</li>
    </li>item</li>
    </li>item</li>
</ul>

```
