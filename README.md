
<i>* This project its in its infancy and is not yet extensive enough to be used as a plugin, but if you contribute to it, it will be. </i>


<h2> Control basic jQuery methods without touching javascript </h2>

By adding simple data tags you can control jQuery methods to trigger on specific elements using only css style accessors.

```
<a href=“foo” data-spider-onClick-fadeOut=“#list” > 
   hideList
</a>

<ol id=“list”> 
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>
```