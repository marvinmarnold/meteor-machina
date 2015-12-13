# machina
Meteor package for workflow: [machina.js] Finite State Machine (FSM), client &amp; server

All credit to [mgebundy](https://github.com/mgebundy/meteor-machina) & [alexreich](https://github.com/alexreich/meteor-machina). Updated and available on Atmosphere.

## Install
    meteor add marvin:machina

## Background:
A [Finite State Machine] is a computational abstraction that:
  - Has a finite number of states in which it can exist
  - Can only be in one state at any time
  - Accepts input
  - Can produce output determined by state &/or input
  - Can transition from one state to another

Source: “Taming Complexity In JavaScript With Machina.js” by Jim Cowart

## Usage:
The global namespace 'machina' is available in both client &amp; server contexts:

## Example Template:
    <template name="connection_tpl">
      <div id="connection-div" class="col-sm-12 alert alert-success">
            <div><label>Connection Status:&nbsp;</label>{{connection_status}}</div>
      </div>
    </template>

## Example View:
    Deps.autorun(function () {
      var connected = Meteor.status().connected;
      Session.set("connected", connected);
    });

    Template.connection_tpl.rendered = function () {
        var Div_Connection = $(this.find("#connection-div"));

        var onlineFsm = new machina.Fsm({
            initialState: "online",
            states : {
                online : {
                       _onEnter: function() {
                            Div_Connection.removeClass('alert-danger').addClass('alert-success');
                        },
                },
                offline : {
                       _onEnter: function() {
                            Div_Connection.removeClass('alert-success').addClass('alert-danger');
                        },
                },
            },
        });
    }

    Template.connection_tpl.helpers({
    	connection_status: function () {
    	  return Session.get("connected") ? "On" : "Off";
    	}
    });

## See Also:
[Taking control with machina.js]

[Finite State Machine]:http://en.wikipedia.org/wiki/Finite-state_machine
[machina.js]:http://machina-js.org/
[Taking control with machina.js]:http://code.dougneiner.com/presentations/machina
