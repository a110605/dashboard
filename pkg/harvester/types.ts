export const HCI = {
  VM:                 'kubevirt.io.virtualmachine',
  VMI:                'kubevirt.io.virtualmachineinstance',
  VMIM:               'kubevirt.io.virtualmachineinstancemigration',
  VM_TEMPLATE:        'harvesterhci.io.virtualmachinetemplate',
  VM_VERSION:         'harvesterhci.io.virtualmachinetemplateversion',
  IMAGE:              'harvesterhci.io.virtualmachineimage',
  SSH:                'harvesterhci.io.keypair',
  VOLUME:             'harvesterhci.io.volume',
  USER:               'harvesterhci.io.user',
  SETTING:            'harvesterhci.io.setting',
  UPGRADE:            'harvesterhci.io.upgrade',
  UPGRADE_LOG:        'harvesterhci.io.upgradelog',
  BACKUP:             'harvesterhci.io.virtualmachinebackup',
  RESTORE:            'harvesterhci.io.virtualmachinerestore',
  NODE_NETWORK:       'network.harvesterhci.io.nodenetwork',
  CLUSTER_NETWORK:    'network.harvesterhci.io.clusternetwork',
  SUPPORT_BUNDLE:     'harvesterhci.io.supportbundle',
  NETWORK_ATTACHMENT: 'harvesterhci.io.networkattachmentdefinition',
  CLUSTER:            'harvesterhci.io.management.cluster',
  DASHBOARD:          'harvesterhci.io.dashboard',
  BLOCK_DEVICE:       'harvesterhci.io.blockdevice',
  CLOUD_TEMPLATE:     'harvesterhci.io.cloudtemplate',
  HOST:               'harvesterhci.io.host',
  VERSION:            'harvesterhci.io.version',
  SNAPSHOT:           'harvesterhci.io.volumesnapshot',
  VM_SNAPSHOT:        'harvesterhci.io.vmsnapshot',
  ALERTMANAGERCONFIG: 'harvesterhci.io.monitoring.alertmanagerconfig',
  CLUSTER_FLOW:       'harvesterhci.io.logging.clusterflow',
  CLUSTER_OUTPUT:     'harvesterhci.io.logging.clusteroutput',
  FLOW:               'harvesterhci.io.logging.flow',
  OUTPUT:             'harvesterhci.io.logging.output',
  STORAGE:            'harvesterhci.io.storage',
  RESOURCE_QUOTA:     'harvesterhci.io.resourcequota',
  KSTUNED:            'node.harvesterhci.io.ksmtuned',
  PCI_DEVICE:         'devices.harvesterhci.io.pcidevice',
  PCI_CLAIM:          'devices.harvesterhci.io.pcideviceclaim',
  SR_IOV:             'devices.harvesterhci.io.sriovnetworkdevice',
  VGPU_DEVICE:        'devices.harvesterhci.io.vgpudevice',
  SR_IOVGPU_DEVICE:   'devices.harvesterhci.io.sriovgpudevice',
  VLAN_CONFIG:        'network.harvesterhci.io.vlanconfig',
  VLAN_STATUS:        'network.harvesterhci.io.vlanstatus',
  ADD_ONS:            'harvesterhci.io.addon',
  LINK_MONITOR:       'network.harvesterhci.io.linkmonitor',
  SECRET:             'harvesterhci.io.secret',
  INVENTORY:          'metal.harvesterhci.io.inventory',
  LB:                 'loadbalancer.harvesterhci.io.loadbalancer',
  IP_POOL:            'loadbalancer.harvesterhci.io.ippool',
  HARVESTER_CONFIG:   'rke-machine-config.cattle.io.harvesterconfig',
};

export const VOLUME_SNAPSHOT = 'snapshot.storage.k8s.io.volumesnapshot';
export const CSI_DRIVER = 'storage.k8s.io.csidriver';
export const VOLUME_SNAPSHOT_CLASS = 'snapshot.storage.k8s.io.volumesnapshotclass';
