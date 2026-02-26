---
helpx_url: "https://helpx.adobe.com/substance-3d-integrations/game-engines/unity/scripting-in-unity-deprecated/c-example-script.html"
breadcrumb-title: ""
description: Example C# scripts demonstrating how to use the deprecated Substance Unity API for parameter changes.
helpx_creative_field: ""
helpx_description: Ecosystems and Plugins > Game Engines > Unity > Scripting in Unity (Deprecated) > C Example Script
helpx_experience_level: ""
helpx_learn_topic: ""
helpx_tags: ""
title: C Example Script
user-guide-description: ""
user-guide-title: ""
---

# C# Example Script

## Changing Parameters

```

using System.Collections; 

using System.Collections.Generic; 

using UnityEngine; 

using Substance.Game; 

  

public class scifiScript : MonoBehaviour 

{ 

    public Substance.Game.SubstanceGraph mySubstance; 

      

  

    // Use this for initialization 

    void Start () 

    { 

        UpdateSubstance(); 

    } 

  

    public void UpdateSubstance() 

    { 

          

        Color color = new Color(0.237f, 0.834f, 0.045f, 1.0f); 

        Vector2 panelSize = new Vector2(0.101f, 0.209f); 

        float wearLevel = 0.977f; 

          

        // panel color 

        mySubstance.SetInputColor("paint_color", color); 

  

        // panel size 

        mySubstance.SetInputVector2("square_open", panelSize); 

  

        // wear level 

        mySubstance.SetInputFloat("wear_level", wearLevel); 

  

        // queue for render 

        mySubstance.QueueForRender(); 

        //render all substances async 

        Substance.Game.Substance.RenderSubstancesAsync(); 

  

    } 

}
```


## Duplicate graph

```

using System.Collections; 

using System.Collections.Generic; 

using UnityEngine; 

 

public class SubstanceScript : MonoBehaviour 

{ 

    // Start is called before the first frame update 

    public Substance.Game.SubstanceGraph sgo; 

    public GameObject cube2; 

    public Color userColor; 

    private Substance.Game.SubstanceGraph sgo2 = null; 

 

    void Start() 

    { 

        //duplicate sgo 

        if(sgo2 == null) 

        { 

            sgo2 = sgo.Duplicate();//duplicate graph 

            sgo2.SetInputColor("paint_color",userColor); 

            cube2.GetComponent<Renderer>().sharedMaterial = sgo2.material;//set material 

 

            sgo2.QueueForRender();//queue for render 

            sgo2.RenderAsync();//render graph 

            Substance.Game.Substance.RenderSubstancesAsync();//render all substances async 

 

        } 

         

    } 

}
```
